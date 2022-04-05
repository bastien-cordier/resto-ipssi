<?php
namespace App\Entity;

use Core\Entity\DefaultEntity;

final class Table extends DefaultEntity implements \JsonSerializable
{
    private int $id;

    private ?int $slot;

    public function jsonSerialize()
    {
        return [
            'id' => $this->id,
            'slot' => $this->slot
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
    public function getSlot(): ?int
    {
        return $this->slot;
    }

    /**
     * @param ?int $slot
     */
    public function setSlot(?int $slot): void
    {
        $this->slot = $slot;
    }

}