<?php
namespace App\Entity;

use Core\Entity\DefaultEntity;

final class BoissonReservation extends DefaultEntity implements \JsonSerializable
{
    private int $id;

    private ?int $idBoisson;

    private ?int $idReservation;

    private ?int $quantity;

    public function jsonSerialize()
    {
        return [
            'id' => $this->id,
            'idBoisson' => $this->idBoisson,
            'idReservation' => $this->idReservation
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
        return $this->idBoisson;
    }

    /**
     * @param ?int $idBoisson
     */
    public function setIdBoisson(?int $idBoisson): self
    {
        $this->idBoisson = $idBoisson;

        return $this;
    }

    /**
     * @return ?int
     */
    public function getIdReservation(): ?int
    {
        return $this->idReservation;
    }

    /**
     * @param ?int $idReservation
     */
    public function setIdReservation(?int $idReservation): self
    {
        $this->idReservation = $idReservation;

        return $this;
    }

    /**
     * @return int|null
     */
    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    /**
     * @param int|null $quantity
     */
    public function setQuantity(?int $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }

}