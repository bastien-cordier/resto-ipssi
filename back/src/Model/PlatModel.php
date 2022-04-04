<?php
namespace App\Model;

use Core\Model\DefaultModel;

/**
 * @method array<Plat> findAll()
 * @method Plat find(int $id)
 * @method int save(array $data)
 * @method int update(int $id, array $data)
 * @method int delete (int $id)
 */
class PlatModel extends DefaultModel {

    protected string $table = 'plat';
    protected string $entity = 'Plat';
}