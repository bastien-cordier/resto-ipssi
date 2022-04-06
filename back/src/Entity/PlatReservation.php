<?php
namespace App\Entity;

use Core\Entity\DefaultEntity;

final class PlatReservation extends DefaultEntity implements \JsonSerializable
{
    private int $id;

    private ?int $idPlat;

    private ?int $idReservation;

    private ?int $quantity;

    public function jsonSerialize()
    {
        return [
            'id' => $this->id,
            'idPlat' => $this->idPlat,
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
    public function getIdPlat(): ?int
    {
        return $this->idPlat;
    }

    /**
     * @param ?int $idPlat
     */
    public function setIdPlat(?int $idPlat): self
    {
        $this->idPlat = $idPlat;

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