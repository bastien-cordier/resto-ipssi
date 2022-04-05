<?php

namespace App\Repository;

use App\Entity\User;
use App\Model\UserModel;

class UserRepository
{
    private $model;

    public function __construct()
    {
        $this->model = new UserModel();

    }

    public function findUser($data): User|null
    {
        if(isset($data['username']) && isset($data['password'])){
            return $this->model->findUser($data['username'], $data['password']);
        }
        return null;
    }
}