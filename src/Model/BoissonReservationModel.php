<?php
namespace App\Model;

use Core\Model\DefaultModel;

/**
 * @method array<BoissonReservation> findAll()
 * @method BoissonReservation find(int $id)
 * @method int save(array $data)
 * @method int update(int $id, array $data)
 * @method int delete (int $id)
 */
class BoissonReservationModel extends DefaultModel {

    protected string $table = 'boisson_reservation';
    protected string $entity = 'BoissonReservation';
}