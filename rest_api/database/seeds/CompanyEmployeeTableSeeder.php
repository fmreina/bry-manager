<?php

use Illuminate\Database\Seeder;
use \App\CompanyEmployee;

class CompanyEmployeeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $json = File::get("database/data-sample/company-employee.json");

        $data = json_decode($json);

        foreach ($data as $obj) {
            CompanyEmployee::create(array(
              "company_id" => $obj->company_id,
              "employee_id" => $obj->employee_id,
           ));
        }
    }
}
