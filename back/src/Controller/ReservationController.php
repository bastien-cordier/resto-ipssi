<?php
namespace App\Controller;

use App\Model\ReservationModel;
use Core\Controller\DefaultController;

final class ReservationController extends DefaultController{

    private $model;

    public function __construct()
    {
        $this->model = new ReservationModel;
    }

    public function index ()
    {
        $reservations = $this->model->findAll();
        $this->jsonResponse($reservations, 200);
    }

    public function single (int $id)
    {
        $reservation = $this->model->find($id);
        $data = [
            'id' => $reservation->getId(),
            'email' => $reservation->getEmail(),
            'price' => $reservation->getPrice()
        ];
        $this->jsonResponse($data, 200);

    }

    public function save ()
    {
        $lastId = $this->model->save($_POST);
        $reservation = $this->model->find($lastId);
        $data = [
            'id' => $reservation->getId(),
            'name' => $reservation->getName()
        ];
        $this->jsonResponse($data, 201);


    }
}