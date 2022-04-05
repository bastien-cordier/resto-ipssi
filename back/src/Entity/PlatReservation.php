<?php
namespace App\Entity;

use Core\Entity\DefaultEntity;

final class PlatReservation extends DefaultEntity implements \JsonSerializable
{
    private int $id;

    private ?int $id_table;

    private ?int $id_reservation;

    public function jsonSerialize()
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
     * @return ?int
     */
    public function getIdTable(): ?int
    {
        return $this->id_table;
    }

    /**
     * @param ?int $id_table
     */
    public function setIdTable(?int $id_table): self
    {
        $this->id_table = $id_table;

        return $this;
    }

    /**
     * @return ?int
     */
    public function getIdReservation(): ?int
    {
        return $this->id_reservation;
    }

    /**
     * @param ?int $id_reservation
     */
    public function setIdReservation(?int $id_reservation): self
    {
        $this->id_reservation = $id_reservation;

        return $this;
    }
}