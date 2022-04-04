<?php
namespace App\Entity;

use Core\Entity\DefaultEntity;

final class Table extends DefaultEntity{

    // php@8.1
    // private readonly int $id;

    // php@8.0
    private int $id;

    private int $slot;

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
    public function getSlot(): int
    {
        return $this->slot;
    }

    /**
     * @param int $slot
     */
    public function setSlot(int $slot): void
    {
        $this->slot = $slot;
    }

}