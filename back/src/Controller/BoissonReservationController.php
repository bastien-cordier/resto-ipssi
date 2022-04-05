<?php
namespace App\Controller;

use App\Model\BoissonReservationModel;
use Core\Controller\DefaultController;

final class BoissonReservationController extends DefaultController{

    private $model;

    public function __construct()
    {
        $this->model = new BoissonReservationModel;
    }

    public function index ()
    {
        $boissonReservations = $this->model->findAll();
        $this->jsonResponse($boissonReservations, 200);
    }

    public function single (int $id)
    {
        $boissonReservation = $this->model->find($id);
        $data = [
            'id' => $boissonReservation->getId(),
            'id_boisson' => $boissonReservation->getIdBoisson(),
            'id_reservation' => $boissonReservation->getIdReservation()
        ];
        $this->jsonResponse($data, 200);

    }

    public function save ()
    {
        $lastId = $this->model->save($_POST);
        $boissonReservation = $this->model->find($lastId);
        $data = [
            'id' => $boissonReservation->getId(),
            'id_boisson' => $boissonReservation->getName(),
            'id_reservation' => $boissonReservation->getIdReservation()
        ];
        $this->jsonResponse($data, 201);


    }
}