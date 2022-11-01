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
            $table->string('name', 100);
            $table->string('contact_number', 15);
            $table->string('email', 50)->unique();
            $table->string('link', 200);
            $table->string('title', 200);
            $table->string('about', 500);
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
