<?php
namespace App\Controller;

use App\Model\PlatReservationModel;
use Core\Controller\DefaultController;

final class PlatReservationController extends DefaultController
{

    public function __construct()
    {
        parent::__construct(new PlatReservationModel());

    }
}