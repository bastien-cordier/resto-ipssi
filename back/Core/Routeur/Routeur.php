<?php
namespace Core\Routeur;

use Core\Trait\JsonTrait;
use Core\Security\Security;

final class Routeur {

    use JsonTrait;

    public static function Routes ()
    {
        try {
            $path = explode("/", $_SERVER['PATH_INFO']);

            if(!isset($path[3])){
                throw new \Exception("Aucune class", 400);
            }
            $name = str_replace( " ", "", ucwords(str_replace('_', ' ', $path[3])));
            $controllerName = "App\Controller\\".$name. "Controller";

            $controller = new $controllerName();
            if($controllerName === "App\Controller\AuthenticationController"){
                self::authentication($controller);
                return;
            }

            switch ($_SERVER['REQUEST_METHOD']) {
                case 'GET':
                    self::onGet($controller, $path);
                    break;

                case 'POST':
                    self::onPost($controller, $path);
                    break;

                case 'PUT':
                    self::onPut($controller, $path);
                    break;

                case 'DELETE':
                    self::onDelete($controller, $path);
                    break;
                default:
                    throw new \Exception("Request non autorisée", 403);
                    break;
            }

        } catch (\Exception $e) {
            self::jsonResponse(["description" => $e->getMessage()], 400);
        } catch (\Error $e) {
            self::jsonResponse(["description" => $e->getMessage()], 404);
        }
    }

    private static function authentication($controller){

        $data = file_get_contents('php://input');
        if (empty($data)) {
            throw new \Exception("Method not found", 404);
        }
        if (!isset($data['username']) || !isset($data['password'])) {
            $data = json_decode(file_get_contents('php://input'), true);
            $controller->authentication($data);
            return ;
        }
        $controller->authentication();
    }

    private static function onPost($controller, $path)
    {
        if (empty(file_get_contents('php://input'))) {
            throw new \Exception("Method not found", 404);
        }

        if (!isset($path[4])) {
            $data = json_decode(file_get_contents('php://input'), true);
            $controller->save($data);
            return ;
        }

        if (!method_exists($controller, $path[4])) {
            throw new \Exception("Méthode inexistante en POST", 404);
        }

        $method = $path[4];
        $controller->$method();
    }

    private static function onPut($controller, $path)
    {
        if(!isset($path[4])){
            throw new \Exception("Method not found", 404);
        }

        if (is_numeric($path[4])) {
            $data = json_decode(file_get_contents('php://input'), true);
            $controller->update($path[4], $data);
            return ;
        }
        if (method_exists($controller, $path[4])) {
            $method = $path[4];
            $controller->$method();
            return ;
        }
        throw new \Exception("Méthode inexistante en PUT", 404);
    }

    private static function onGet($controller, $path)
    {
        if(!isset($path[4])){
            $controller->index();
            return ;
        }

        if (is_numeric($path[4])) {
            $controller->single($path[4]);
            return ;
        }

        if (method_exists($controller, $path[4])) {
            $method = $path[4];
            $controller->$method();
            return ;
        }

        throw new \Exception("Méthode inexistante en GET", 404);
    }

    private static function onDelete($controller, $path)
    {
        if (isset($path[4]) && is_numeric($path[4])) {
            $controller->delete($path[4]);
            return ;
        }
        throw new \Exception("Not Found", 404);
    }
}