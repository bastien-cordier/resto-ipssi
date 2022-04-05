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
        $tables = $this->model->findAll();
        $this->jsonResponse($tables, 200);
    }

    public function single (int $id)
    {
        $table = $this->model->find($id);
        $data = [
            'id' => $table->getId(),
            'slot' => $table->getSlot()
        ];
        $this->jsonResponse($data, 200);

    }

    public function save ()
    {
        $lastId = $this->model->save($_POST);
        $table = $this->model->find($lastId);
        $data = [
            'id' => $table->getId(),
            'slot' => $table->getSlot()
        ];
        $this->jsonResponse($data, 201);


    }
}