<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('student', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->bigInteger('user_id')->unsigned();
            $table->string('name', 100)->nullable();
            $table->string('contact_number', 15)->nullable();
            $table->string('email', 50)->unique();
            $table->string('link', 200)->nullable();
            $table->string('title', 200)->nullable();
            $table->string('about', 500)->nullable();
            $table->bigInteger('student_skillset_id')->unsigned();
            $table->timestamps();
        });

        Schema::table('student', function($table) {
            $table->foreign('user_id')->references('id')->on('user');
            $table->foreign('student_skillset_id')->references('id')->on('skillset');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('student');
    }
};
