<?php
namespace App\Model;

use Core\Model\DefaultModel;

/**
 * @method array<Reservation> findAll()
 * @method Reservation find(int $id)
 * @method int save(array $data)
 * @method int update(int $id, array $data)
 * @method int delete (int $id)
 */
class ReservationModel extends DefaultModel {

    protected string $table = 'reservation';
    protected string $entity = 'Reservation';
}