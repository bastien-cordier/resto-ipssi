<?php
namespace App\Entity;

use Core\Entity\DefaultEntity;

final class User extends DefaultEntity implements \JsonSerializable
{
    private int $id;

    private ?string $username;

    private ?string $password;

    public function jsonSerialize()
    {
        return [
            'id' => $this->id,
            'username' => $this->username,
            'password' => $this->password
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
    public function getUsername(): ?string
    {
        return $this->username;
    }

    /**
     * @param ?string $username
     */
    public function setUsername(?string $username): self
    {
        $this->username = $username;

        return $this;
    }

    /**
     * @return ?string
     */
    public function getPassword(): ?string
    {
        return $this->password;
    }

    /**
     * @param ?string $password
     */
    public function setPassword(?string $password): self
    {
        $this->password = $password;

        return $this;
    }

}