<?php
namespace App\Controller;

use App\Model\UserModel;
use Core\Controller\DefaultController;

final class UserController extends DefaultController{

    private $model;

    public function __construct()
    {
        $this->model = new UserModel;
    }

    public function index ()
    {
        $users = $this->model->findAll();
        $this->jsonResponse($users, 200);
    }

    public function single (int $id)
    {
        $user = $this->model->find($id);
        $data = [
            'id' => $user->getId(),
            'username' => $user->getUsername(),
        ];
        $this->jsonResponse($data, 200);

    }

    public function save ()
    {
        $lastId = $this->model->save($_POST);
        $user = $this->model->find($lastId);
        $data = [
            'id' => $user->getId(),
            'username' => $user->getUsername(),
        ];
        $this->jsonResponse($data, 201);


    }
}