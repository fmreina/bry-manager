<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(\App\CompanyEmployee::class, function (Faker $faker) {
    return [
        'company_id' => factory(App\Company::class),
        'employee_id' => factory(App\Employee::class)
    ];
});
