<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(\App\Employee::class, function (Faker $faker) {
    return [
        'login' => Str::random(5),
        'password' => 'password',//'$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'name' => $faker->name,
        'cpf' => Str::random(11),
        'email' => $faker->unique()->safeEmail,
        'address' => $faker->text,
    ];
});
