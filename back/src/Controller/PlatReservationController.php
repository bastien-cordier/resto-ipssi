<?php
namespace App\Controller;

use App\Model\PlatReservationModel;
use Core\Controller\DefaultController;

final class PlatReservationController extends DefaultController{

    private $model;

    public function __construct()
    {
        $this->model = new PlatReservationModel;
    }

    public function index ()
    {
        $platReservations = $this->model->findAll();
        $this->jsonResponse($platReservations, 200);
    }

    public function single (int $id)
    {
        $platReservation = $this->model->find($id);
        $cat = [
            'id' => $platReservation->getId(),
            'id_table' => $platReservation->getIdTable(),
            'id_reservation' => $platReservation->getIdReservation()
        ];
        $this->jsonResponse($cat, 200);

    }

    public function save ()
    {
        $lastId = $this->model->save($_POST);
        $platReservation = $this->model->find($lastId);
        $data = [
            'id' => $platReservation->getId(),
            'id_table' => $platReservation->getIdTable(),
            'id_reservation' => $platReservation->getIdReservation()
        ];
        $this->jsonResponse($data, 201);


    }
}