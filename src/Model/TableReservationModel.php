<?php
namespace App\Model;

use Core\Model\DefaultModel;

/**
 * @method array<TableReservation> findAll()
 * @method TableReservation find(int $id)
 * @method int save(array $data)
 * @method int update(int $id, array $data)
 * @method int delete (int $id)
 */
class TableReservationModel extends DefaultModel {

    protected string $table = 'table_reservation';
    protected string $entity = 'TableReservation';
}