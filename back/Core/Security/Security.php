<?php

namespace Core\Security;

use App\Entity\User;

class Security
{
    public static function createToken(User $user)
    {
        $header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);

        $time = new \DateTime();
        $time->add(new \DateInterval('PT1H'));
        $payload = json_encode(['user_id' => $user->getId(), 'end' => $time->format('Y-m-d H:i')]);
        $base64UrlHeader = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));
        $base64UrlPayload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($payload));
        $signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, 'abC123!', true);
        $base64UrlSignature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));
        return $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;
    }

    public static function decodeToken($jwt)
    {
        return json_decode(base64_decode(str_replace('_', '/', str_replace('-','+',explode('.', $jwt)[1]))), true);
    }

    public static function isAuthorized(): bool
    {
        try{
            if(!isset(getallheaders()["Authorization"])){
                return false;
            }
            $payload  = self::decodeToken(getallheaders()["Authorization"]);

            if (!isset($payload['user_id']) || !isset($payload['end'])){
                return false;
            }

            if(new \DateTime($payload['end']) < new \DateTime()){
                return false;
            }

            return true;

        } catch (\Error) {
            return false;
        } catch (\Exception) {
            return false;
        }

    }
}