<?php
namespace App\Entity;

use Core\Entity\DefaultEntity;

final class PlatReservation extends DefaultEntity{

    // php@8.1
    // private readonly int $id;

    // php@8.0
    private int $id;

    private int $id_table;

    private int $id_reservation;

    public function __invoke()
    {
        return [
            'id' => $this->id,
            'id_table' => $this->id_table,
            'id_reservation' => $this->id_reservation
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
    public function getIdTable(): int
    {
        return $this->id_table;
    }

    /**
     * @param int $id_table
     */
    public function setIdTable(int $id_table): void
    {
        $this->id_table = $id_table;
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