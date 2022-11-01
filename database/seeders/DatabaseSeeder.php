<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_type')->insert(['name' => 'Admin']);
        DB::table('user_type')->insert(['name' => 'Student']);
        DB::table('user_type')->insert(['name' => 'Employee']);
    }
}
