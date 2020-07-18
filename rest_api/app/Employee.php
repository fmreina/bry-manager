<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $fillable = [
        'login',
        'password',
        'name',
        'cpf',
        'email',
        'address',
    ];

    protected $table = 'employee'; // specify the table name

}
