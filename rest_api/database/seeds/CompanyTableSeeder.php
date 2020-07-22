<?php

use Illuminate\Database\Seeder;
use \App\Company;

class CompanyTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Company::class, 2)->create();

        // DB::table('company')->delete();

        // $json = File::get()("database/data-sample/employee.json");

        // $data = json_decode($json);

        // foreach ($data as $obj) {
        //     Company::create(array(
        //       "name" => $obj->name,
        //       "cnpj" => $obj->cnpj,
        //       "address" => $obj->address,
        //    ));
        // }
    }
}
