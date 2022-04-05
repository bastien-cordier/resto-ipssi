<?php
namespace App\Model;

use App\Entity\User;
use Core\Model\DefaultModel;

/**
 * @method array<User> findAll()
 * @method User find(int $id)
 * @method int save(array $data)
 * @method int update(int $id, array $data)
 * @method int delete (int $id)
 */
class UserModel extends DefaultModel {

    protected string $table = 'user';
    protected string $entity = 'User';


    /**
    * Retourne une ligne d'une table en fonctionde l'id passé
    *
    * @param integer $id
    * @return object
    */
    public function findUser(string $username, string $password): User
    {
        return $this->getData("SELECT * FROM $this->table WHERE ( username = '$username' ) and ( password = '$password' )", $this->entity, true);
    }
}