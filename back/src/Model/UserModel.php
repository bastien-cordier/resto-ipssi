<?php
namespace App\Model;

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
}