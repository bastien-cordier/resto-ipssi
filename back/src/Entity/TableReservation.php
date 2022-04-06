<?php
namespace App\Entity;

use Core\Entity\DefaultEntity;

final class TableReservation extends DefaultEntity implements \JsonSerializable
{
    private int $id;

    private ?int $idTable;

    private ?int $idReservation;

    private $startDate;

    private $endDate;

    public function jsonSerialize()
    {
        return [
            'id' => $this->id,
            'idTable' => $this->idTable,
            'idReservation' => $this->idReservation,
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
        return $this->idTable;
    }

    /**
     * @param ?int $idTable
     */
    public function setIdTable(?int $idTable): self
    {
        $this->idTable = $idTable;

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
     * @return string
     */
    public function getStartDate(): string
    {
        return $this->startDate;
    }

    /**
     * @param string $startDate
     */
    public function setStartDate(string $startDate): self
    {
        $this->startDate = $startDate;

        return $this;
    }

    /**
     * @return string
     */
    public function getEndDate(): string
    {
        return $this->endDate;
    }

    /**
     * @param string $endDate
     */
    public function setEndDate(string $endDate): self
    {
        $this->endDate = $endDate;

        return $this;
    }
}