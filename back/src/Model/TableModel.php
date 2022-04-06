<?php
namespace App\Model;

use Core\Model\DefaultModel;

/**
 * @method array<Table> findAll()
 * @method Table find(int $id)
 * @method int save(array $data)
 * @method int update(int $id, array $data)
 * @method int delete (int $id)
 */
class TableModel extends DefaultModel {

    protected string $table = 'restaurant_table';
    protected string $entity = 'Table';
}