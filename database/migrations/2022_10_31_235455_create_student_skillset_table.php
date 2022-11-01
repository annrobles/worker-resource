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
        Schema::create('student_skillset', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->bigInteger('student_id')->unsigned();
            $table->bigInteger('skillset_id')->unsigned();
            $table->integer('total_years_experience');
            $table->timestamps();
        });

        Schema::table('student_skillset', function($table) {
            $table->foreign('student_id')->references('id')->on('student');
            $table->foreign('skillset_id')->references('id')->on('skillset');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('student_skillset');
    }
};
