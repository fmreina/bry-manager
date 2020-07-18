<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    // items used to fill with information
    protected $fillable = [
        'name',
        'cnpj',
        'address',
    ];

    protected $table = 'company'; // specify the table name

    protected $primaryKey = 'id'; // tables primary key

    // declares the relationship many to many between employee and company
    public function employees(){
        // $this->belongsToMany('relation', 'name of the pivot table', 'key ref. of this table in the pivot', 'key ref. of other table in the pivot')
        return $this->belongsToMany('App\Employee', 'company_employee', 'company_id', 'employee_id');
    }
}
