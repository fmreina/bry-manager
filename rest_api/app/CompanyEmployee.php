<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CompanyEmployee extends Model
{
    protected $filllable = [
        'company_id',
        'employee_id'
    ];

    protected $table = 'company_employee';

    protected $primaryKey = 'id';
}
