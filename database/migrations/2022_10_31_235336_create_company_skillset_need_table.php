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
        Schema::create('company_skillset_need', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->bigInteger('company_id')->unsigned();
            $table->bigInteger('skillset_id')->unsigned();
            $table->integer('total_years_experience');
            $table->timestamps();
        });

        Schema::table('company_skillset_need', function($table) {
            $table->foreign('company_id')->references('id')->on('company');
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
        Schema::dropIfExists('company_skillset_need');
    }
};
