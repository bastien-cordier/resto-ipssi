<?php
namespace Core\Routeur;

use Core\Trait\JsonTrait;

final class Routeur {

    use JsonTrait;

    public static function Routes ()
    {
        try {
            $path = explode("/", $_SERVER['PATH_INFO']);

            if(!isset($path[3])){
                throw new \Exception("Aucune class", 400);
            }

            $controllerName = "App\Controller\\". ucfirst($path[3]). "Controller";

            $controller = new $controllerName();

            if (!isset($path[4])) {
                $controller->index(null);
                return ;
            }

            if (is_numeric($path[4])) {
                $controller->single($path[4]);
                return ;
            }

            if (method_exists($controller, $path[4])) {
                $controller->$path[4](null);
                return ;
            }

            throw new \Exception("Méthode inexistante", 404);

        } catch (\Exception $e) {
            self::jsonResponse(["description" => $e->getMessage()], $e->getCode());
        } catch (\Error $e) {
            self::jsonResponse(["description" => $e->getMessage()], 404);
        }
    }
}