<?php
namespace App\Controller;

use App\Model\PlatModel;
use Core\Controller\DefaultController;

final class PlatController extends DefaultController{

    private $model;

    public function __construct()
    {
        $this->model = new PlatModel;
    }

    public function index ()
    {
        $plats = $this->model->findAll();
        $this->jsonResponse($plats, 200);
    }

    public function single (int $id)
    {
        $plat = $this->model->find($id);
        $data = [
            'id' => $plat->getId(),
            'name' => $plat->getName(),
            'description' => $plat->getDescription(),
            'price' => $plat->getPrice()
        ];
        $this->jsonResponse($data, 200);

    }

    public function save ()
    {
        $lastId = $this->model->save($_POST);
        $plat = $this->model->find($lastId);
        $data = [
            'id' => $plat->getId(),
            'name' => $plat->getName(),
            'description' => $plat->getDescription(),
            'price' => $plat->getPrice()
        ];
        $this->jsonResponse($data, 201);


    }
}