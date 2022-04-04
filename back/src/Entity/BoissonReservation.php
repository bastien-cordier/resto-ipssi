<?php
namespace App\Entity;

use Core\Entity\DefaultEntity;

final class BoissonReservation extends DefaultEntity{

    private int $id;

    private int $id_boisson;

    private int $id_reservation;

    public function __invoke()
    {
        return [
            'id' => $this->id,
        ];
    }

    /**
     * Get the value of id
     *
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @return int
     */
    public function getIdBoisson(): int
    {
        return $this->id_boisson;
    }

    /**
     * @param int $id_boisson
     */
    public function setIdBoisson(int $id_boisson): void
    {
        $this->id_boisson = $id_boisson;
    }

    /**
     * @return int
     */
    public function getIdReservation(): int
    {
        return $this->id_reservation;
    }

    /**
     * @param int $id_reservation
     */
    public function setIdReservation(int $id_reservation): void
    {
        $this->id_reservation = $id_reservation;
    }
}