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
        Schema::create('user_locations', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->bigInteger('user_id')->unsigned();
            $table->string('address1', 50)->nullable();
            $table->string('address2', 50)->nullable();
            $table->string('city', 50)->nullable();
            $table->string('state', 50)->nullable();
            $table->string('postal_code', 50)->nullable();
            $table->string('country', 50)->nullable();
            $table->timestamps();
        });

        Schema::table('user_locations', function($table) {
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_locations');
    }
};
