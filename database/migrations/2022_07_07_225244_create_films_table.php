<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFilmsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('films', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('introduction')->nullable();
            $table->string('image')->nullable();
            $table->string('poster')->nullable();
            $table->string('trailer')->nullable();
            $table->integer('year_release')->nullable();
            $table->integer('time')->nullable();
            $table->integer('espisode_number')->nullable();
            $table->integer('resolution');
            $table->integer('type');
            $table->integer('status');
            $table->foreignId('country_id')->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('films');
    }
}
