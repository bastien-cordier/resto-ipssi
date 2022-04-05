<?php
namespace App\Entity;

use Core\Entity\DefaultEntity;

final class Reservation extends DefaultEntity{

    // php@8.1
    // private readonly int $id;

    // php@8.0
    private int $id;

    private string $email;

    private float $price;

    public function __invoke()
    {
        return [
            'id' => $this->id,
            'email' => $this->email,
            'price' => $this->price
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
     * @return string
     */
    public function getEmail(): string
    {
        return $this->email;
    }

    /**
     * @param string $email
     */
    public function setEmail(string $email): void
    {
        $this->email = $email;
    }

    /**
     * @return float
     */
    public function getPrice(): float
    {
        return $this->price;
    }

    /**
     * @param float $price
     */
    public function setPrice(float $price): void
    {
        $this->price = $price;
    }
}