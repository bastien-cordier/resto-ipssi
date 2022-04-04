<?php
namespace App\Model;

use Core\Model\DefaultModel;

/**
 * @method array<Boisson> findAll()
 * @method Boisson find(int $id)
 * @method int save(array $data)
 * @method int update(int $id, array $data)
 * @method int delete (int $id)
 */
class BoissonModel extends DefaultModel {

    protected string $table = 'boisson';
    protected string $entity = 'Boisson';
}