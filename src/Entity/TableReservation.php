<?php
namespace App\Entity;

use Core\Entity\DefaultEntity;

final class TableReservation extends DefaultEntity{

    // php@8.1
    // private readonly int $id;

    // php@8.0
    private int $id;

    private int $id_table;

    private int $id_reservation;

    private \DateTime $startDate;

    private \DateTime $endDate;

    private int $nbPoeple;

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
    public function setStartDate(\DateTime $startDate): void
    {
        $this->startDate = $startDate;
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
    public function setEndDate(\DateTime $endDate): void
    {
        $this->endDate = $endDate;
    }

    /**
     * @return int
     */
    public function getNbPoeple(): int
    {
        return $this->nbPoeple;
    }

    /**
     * @param int $nbPoeple
     */
    public function setNbPoeple(int $nbPoeple): void
    {
        $this->nbPoeple = $nbPoeple;
    }
}