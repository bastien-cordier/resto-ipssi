<?php
namespace App\Entity;

use Core\Entity\DefaultEntity;

final class TableReservation extends DefaultEntity implements \JsonSerializable
{
    private int $id;

    private ?int $id_table;

    private ?int $id_reservation;

    private \DateTime $startDate;

    private \DateTime $endDate;

    private ?int $nbPoeple;

    public function jsonSerialize()
    {
        return [
            'id' => $this->id,
            'id_table' => $this->id_table,
            'id_reservation' => $this->id_reservation,
            'startDate' => $this->startDate,
            'endDate' => $this->endDate
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

    /**
     * @return \DateTime
     */
    public function getStartDate(): \DateTime
    {
        return $this->startDate;
    }

    /**
     * @param \DateTime $startDate
     */
    public function setStartDate(\DateTime $startDate): self
    {
        $this->startDate = $startDate;

        return $this;
    }

    /**
     * @return \DateTime
     */
    public function getEndDate(): \DateTime
    {
        return $this->endDate;
    }

    /**
     * @param \DateTime $endDate
     */
    public function setEndDate(\DateTime $endDate): self
    {
        $this->endDate = $endDate;

        return $this;
    }

    /**
     * @return ?int
     */
    public function getNbPoeple(): ?int
    {
        return $this->nbPoeple;
    }

    /**
     * @param ?int $nbPoeple
     */
    public function setNbPoeple(?int $nbPoeple): self
    {
        $this->nbPoeple = $nbPoeple;

        return $this;
    }
}