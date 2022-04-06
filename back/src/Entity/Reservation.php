<?php
namespace App\Entity;

use Core\Entity\DefaultEntity;

final class Reservation extends DefaultEntity implements \JsonSerializable
{
    private int $id;

    private ?string $email;

    private ?string $status;

    private ?int $nbPoeple;

    private array $boissons = [];

    private array $plats = [];

    private array $tables = [];

    public function jsonSerialize()
    {
        return [
            'id' => $this->id,
            'email' => $this->email,
            'status' => $this->status,
            'nbPoeple' => $this->nbPoeple,
            'plats' => $this->plats,
            'boissons' => $this->boissons,
            'tables' =>$this->tables
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
     * @return ?string
     */
    public function getEmail(): ?string
    {
        return $this->email;
    }

    /**
     * @param ?string $email
     */
    public function setEmail(?string $email): void
    {
        $this->email = $email;
    }

    /**
     * @return ?string
     */
    public function getStatus(): ?string
    {
        return $this->status;
    }

    /**
     * @param ?string $email
     */
    public function setStatus(?string $status): void
    {
        $this->status = $status;
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

    /**
     * @return array
     */
    public function getBoissons(): array
    {
        return $this->boissons;
    }

    /**
     * @param array $boissons
     */
    public function setBoissons(array $boissons): self
    {
        $this->boissons = $boissons;

        return $this;
    }

    /**
     * @return array
     */
    public function getPlats(): array
    {
        return $this->plats;
    }

    /**
     * @param array $plats
     */
    public function setPlats(array $plats): self
    {
        $this->plats = $plats;

        return $this;
    }

    /**
     * @return array
     */
    public function getTables(): array
    {
        return $this->tables;
    }

    /**
     * @param array $tables
     */
    public function setTables(array $tables): self
    {
        $this->tables = $tables;

        return $this;
    }
}