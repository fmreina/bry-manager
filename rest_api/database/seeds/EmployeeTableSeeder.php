<?php

use Illuminate\Database\Seeder;
use \App\Employee;

class EmployeeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('employee')->delete();

        $json = File::get("database/data-sample/employee.json");

        $data = json_decode($json);

        foreach ($data as $obj) {
            echo $obj->name;
            Employee::create(array(
              "login" => $obj->login,
              "password" => $obj->password,
              "name" => $obj->name,
              "cpf" => $obj->cpf,
              "email" => $obj->email,
              "address" => $obj->address,
           ));
        }
    }
}
