<?php
namespace App\Controller;

use App\Model\ReservationModel;
use Core\Controller\DefaultController;

final class ReservationController extends DefaultController
{
    public function __construct()
    {
        parent::__construct(new ReservationModel());
    }
}