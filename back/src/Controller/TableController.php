<?php
namespace App\Controller;

use App\Model\TableModel;
use Core\Controller\DefaultController;

final class TableController extends DefaultController{

    private $model;

    public function __construct()
    {
        $this->model = new TableModel;
    }

    public function index ()
    {
        $categories = $this->model->findAll();
        $this->jsonResponse($categories, 200);
    }

    public function single (int $id)
    {
        $categorie = $this->model->find($id);
        $cat = [
            'id' => $categorie->getId(),
            'name' => $categorie->getName()
        ];
        $this->jsonResponse($cat, 200);

    }

    public function save ()
    {
        $lastId = $this->model->save($_POST);
        $categorie = $this->model->find($lastId);
        $cat = [
            'id' => $categorie->getId(),
            'name' => $categorie->getName()
        ];
        $this->jsonResponse($cat, 201);


    }
}