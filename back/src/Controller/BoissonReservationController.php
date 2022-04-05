<?php
namespace App\Controller;

use App\Model\BoissonReservationModel;
use Core\Controller\DefaultController;

final class BoissonReservationController extends DefaultController
{

    public function __construct()
    {
        parent::__construct(new BoissonReservationModel());
    }
}