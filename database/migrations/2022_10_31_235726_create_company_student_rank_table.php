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
        Schema::create('company_student_rank', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->bigInteger('company_id')->unsigned();
            $table->bigInteger('student_id')->unsigned();
            $table->integer('rank')->nullable();
            $table->timestamps();
        });

        Schema::table('company_student_rank', function($table) {
            $table->foreign('company_id')->references('id')->on('company');
            $table->foreign('student_id')->references('id')->on('student');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('company_student_rank');
    }
};
