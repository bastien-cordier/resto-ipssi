<?php
namespace App\Model;

use Core\Model\DefaultModel;

/**
 * @method array<PlatReservation> findAll()
 * @method PlatReservation find(int $id)
 * @method int save(array $data)
 * @method int update(int $id, array $data)
 * @method int delete (int $id)
 */
class PlatReservationModel extends DefaultModel {

    protected string $table = 'plat_reservation';
    protected string $entity = 'PlatReservation';
}