<?php
namespace App\Controller;

use App\Model\UserModel;
use Core\Controller\DefaultController;

final class UserController extends DefaultController
{
    public function __construct()
    {
        parent::__construct(new UserModel());
    }
}