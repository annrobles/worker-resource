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
        Schema::create('user_experiences', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->bigInteger('user_id')->unsigned();
            $table->string('title', 50)->nullable();
            $table->string('company_name', 50)->nullable();
            $table->string('location', 100)->nullable();
            $table->text('description')->nullable();
            $table->date('start_date')->default(DB::raw('NOW()'));
            $table->date('end_date')->default(DB::raw('NOW()'));
            $table->timestamps();
        });

        Schema::table('user_experiences', function($table) {
            $table->foreign('user_id')->references('id')->on('user');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_experiences');
    }
};
