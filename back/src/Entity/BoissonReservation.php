<?php
namespace App\Entity;

use Core\Entity\DefaultEntity;

final class BoissonReservation extends DefaultEntity implements \JsonSerializable
{

    private int $id;

    private ?int $id_boisson;

    private ?int $id_reservation;

    public function jsonSerialize()
    {
        return [
            'id' => $this->id,
            'id_boisson' => $this->id_boisson,
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
    public function getIdBoisson(): ?int
    {
        return $this->id_boisson;
    }

    /**
     * @param ?int $id_boisson
     */
    public function setIdBoisson(?int $id_boisson): self
    {
        $this->id_boisson = $id_boisson;

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