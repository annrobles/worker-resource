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
        DB::table('user_type')->insert(['name' => 'Company']);
        DB::table('user_type')->insert(['name' => 'Student']);

        DB::table('user')->insert([
            'email' => 'admin@worker.ca',
            'password' => bcrypt('password'),
            'user_type_id' => 1
        ]);
        
        DB::table('skillset')->insert(['name' => 'Database']);
        DB::table('skillset')->insert(['name' => 'Computer Science']);
        DB::table('skillset')->insert(['name' => 'JavaScript']);
        DB::table('skillset')->insert(['name' => '.Net']);
        DB::table('skillset')->insert(['name' => 'Technical']);
        DB::table('skillset')->insert(['name' => 'Collaboration']);
        DB::table('skillset')->insert(['name' => 'Innovation']);
        DB::table('skillset')->insert(['name' => 'Communication Skills']);
        DB::table('skillset')->insert(['name' => 'SQL']);
        DB::table('skillset')->insert(['name' => 'Documentation']);
        DB::table('skillset')->insert(['name' => 'Jquery']);
        DB::table('skillset')->insert(['name' => 'Angular JS']);
        DB::table('skillset')->insert(['name' => 'PHP']);
        DB::table('skillset')->insert(['name' => 'Google Cloud Platform (GCP)']);
        DB::table('skillset')->insert(['name' => 'Microsoft Azure']);
        DB::table('skillset')->insert(['name' => 'Amazon Web Services (AWS)']);
        DB::table('skillset')->insert(['name' => 'Ruby']);
        DB::table('skillset')->insert(['name' => 'Java']);
        DB::table('skillset')->insert(['name' => 'Python']);
    }
}