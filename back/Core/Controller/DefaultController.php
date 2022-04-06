<?php
namespace Core\Controller;

use Core\Trait\JsonTrait;

/**
 * Une class abstract est une class parent qui ne peut être instanciée.
 * Elle contient obligatoirement des méthodes abstract.
 * 
 * Ces méthodes abstract sont des méthodes que l'on doit obligatoirement définir dans les class enfant
 */
class DefaultController{

    use JsonTrait;

    private $model;

    public function __construct($model)
    {
        $this->model = $model;
    }

    /**
     * Génère l'affichage des templates des pages
     *
     * @param string $view
     * @param array $params
     * @return void
     */
    public function render (string $view, array $params = []): void
    {
        ob_start();
            extract($params);
            if (file_exists(ROOT . "/templates/$view.phtml")) {
                require ROOT . "/templates/$view.phtml";
            } else {
                throw new \Exception("Le template demandé n'existe pas", 1);
            }
        $content = ob_get_clean();
        require ROOT . "/templates/base.phtml";
    }

    public function index ()
    {
        $entities = $this->model->findAll();
        $this->jsonResponse($entities, 200);
    }

    public function single (int $id)
    {
        $entity = $this->model->find($id);
        $this->jsonResponse($entity, 200);
    }

    /**
     * Enregistre une catégorie en BDD
     *
     * @param array $data
     * @return void
     */
    public function save (array $data)
    {
        $lastId = $this->model->save($data);
        $entity = $this->model->find($lastId);
        $this->jsonResponse($entity, 201);
        return $entity;
    }

    /**
     * Modifie une catégorie en BDD
     *
     * @param integer $id
     * @param array $data
     * @return void
     */
    public function update (int $id, array $data)
    {
        $this->model->update($id, $data);
        $this->jsonResponse("Entité modifiée", 201);
    }

    /**
     * Supprime une catégorie en BDD
     *
     * @param integer $id
     * @return void
     */
    public function delete (int $id)
    {
        $this->model->delete($id);
        $this->jsonResponse("Entité supprimée", 200);
    }

}