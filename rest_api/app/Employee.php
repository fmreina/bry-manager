<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    // items used to fill with information
    protected $fillable = [
        'login',
        'password',
        'name',
        'cpf',
        'email',
        'address',
    ];

    protected $table = 'employee'; // specify the table name

    protected $primaryKey = 'id'; // tables primary key

    // declares the relationship many to many between employee and company
    public function companies(){
        // $this->belongsToMany('relation', 'name of the pivot table', 'key ref. of this table in the pivot', 'key ref. of other table in the pivot')
        return $this->belongsToMany('App\Company', 'company_employee', 'employee_id', 'company_id');
    }

}
