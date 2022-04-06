<?php

namespace App\Controller;

use App\Model\UserModel;
use Core\Security\Security;
use App\Repository\UserRepository;
use Core\Trait\JsonTrait;

class AuthenticationController
{
    use JsonTrait;

    private $userRepository;

    public function __construct()
    {
        $this->userRepository = new UserRepository();
    }

    public function authentication($data)
    {
        if($user = $this->userRepository->findUser($data)){
            $this->jsonResponse(["token" => Security::createToken($user), "id" => $user->getId()], 200);
            return ;
        }
        $this->jsonResponse(["message" => "Bad credential"], 401);
    }
}