<?php
namespace App\Controller;

use App\Model\TableReservationModel;
use Core\Controller\DefaultController;

final class TableReservationController extends DefaultController
{
    public function __construct()
    {
        parent::__construct(new TableReservationModel());
    }
}