<?php
namespace App\Controller;

use App\Model\TableReservationModel;
use Core\Controller\DefaultController;

final class TableReservationController extends DefaultController{

    private $model;

    public function __construct()
    {
        $this->model = new TableReservationModel;
    }

    public function index ()
    {
        $tableReservations = $this->model->findAll();
        $this->jsonResponse($tableReservations, 200);
    }

    public function single (int $id)
    {
        $tableReservation = $this->model->find($id);
        $data = [
            'id' => $tableReservation->getId(),
            'id_table' => $tableReservation->getIdTable(),
            'id_reservation' => $tableReservation->getIdReservation(),
            'startDate' => $tableReservation->getStartDate(),
            'endDate' => $tableReservation->getEndDate()
        ];
        $this->jsonResponse($data, 200);

    }

    public function save ()
    {
        $lastId = $this->model->save($_POST);
        $tableReservation = $this->model->find($lastId);
        $data = [
            'id' => $tableReservation->getId(),
            'id_table' => $tableReservation->getIdTable(),
            'id_reservation' => $tableReservation->getIdReservation(),
            'startDate' => $tableReservation->getStartDate(),
            'endDate' => $tableReservation->getEndDate()
        ];
        $this->jsonResponse($data, 201);


    }
}