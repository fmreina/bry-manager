<?php

use Illuminate\Database\Seeder;

class ClearDB extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0');

        DB::table('company_employee')->truncate();
        DB::table('employee')->truncate();
        DB::table('company')->truncate();

    }
}
