<?php

namespace App\Controller;

use App\Entity\User;
use App\Model\UserModel;
use Core\Controller\DefaultController;
use Core\Security\Security;
use App\Repository\UserRepository;

class AuthenticationController extends DefaultController
{
    private $userRepository;

    public function __construct()
    {
        $this->userRepository = new UserRepository();
        parent::__construct(new UserModel());
    }

    public function authentication($data)
    {
        if($user = $this->userRepository->findUser($data)){
            $this->jsonResponse(["token" => Security::createToken($user)], 200);
            return ;
        }
        $this->jsonResponse(["message" => "Bad credential"], 401);
    }

    public function save(array $data)
    {
        throw new \Exception("Méthode inexistante en POST", 404);
    }

    public function update(int $id, array $data)
    {
        throw new \Exception("Méthode inexistante en POST", 404);
    }

    public function delete(int $id)
    {
        throw new \Exception("Méthode inexistante en POST", 404);
    }

    public function single(int $id)
    {
        throw new \Exception("Méthode inexistante en POST", 404);
    }

    public function index()
    {
        throw new \Exception("Méthode inexistante en POST", 404);
    }
}