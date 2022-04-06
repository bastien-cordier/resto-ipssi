<?php

namespace App\Controller;

use App\Model\UserModel;
use Core\Security\Security;
use Core\Trait\JsonTrait;

class AuthenticationController
{
    use JsonTrait;

    private $userModel;

    public function __construct()
    {
        $this->userModel = new UserModel();
    }

    public function authentication($data)
    {
        if(!isset($data['username']) || !isset($data['password'])){
            $this->jsonResponse(["message" => "Bad credential"], 401);
        }

        if($user = $this->userModel->findUser($data['username'], $data['password'])){
            $this->jsonResponse(["token" => Security::createToken($user), "id" => $user->getId()], 200);
            return ;
        }

        $this->jsonResponse(["message" => "Bad credential"], 401);
    }
}