<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::dropIfExists('item_codes');
        Schema::create('item_codes', function (Blueprint $table) {
            $table->id();
            $table->string('type')->index();
            $table->string('code');
            $table->string('slug');
            $table->string('label');
            $table->softDeletes();
            $table->timestamps();
        });
        Schema::dropIfExists('components');
        Schema::create('components', function (Blueprint $table) {
            $table->id();
            $table->string('label');
            $table->boolean('active')->default(0);
            $table->string('image_url')->nullable();
            $table->unsignedBigInteger('component_id')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::table('components', function (Blueprint $table) {
            $table->foreign('component_id')->references('id')->on('components');
        });

        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('label');
            $table->boolean('active')->default(0);
            $table->string('image_url')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::create('brands', function (Blueprint $table) {
            $table->id();
            $table->string('label');
            $table->boolean('active')->default(0);
            $table->string('image_url')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::create('brand_models', function (Blueprint $table) {
            $table->id();
            $table->string('label');
            $table->boolean('active')->default(0);
            $table->string('image_url')->nullable();

            $table->unsignedBigInteger('category_id');
            $table->foreign('category_id')->references('id')->on('categories');

            $table->unsignedBigInteger('brand_id');
            $table->foreign('brand_id')->references('id')->on('brands');
            $table->softDeletes();
            $table->timestamps();
        });


        Schema::create('spot_reports', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('item_code_id');
            $table->string('title')->nullable();
            $table->string('description')->nullable();
            $table->unsignedBigInteger('author_id');
            $table->unsignedBigInteger('spot_id');
            $table->softDeletes();
            $table->timestamps();

            $table->foreign('item_code_id')->references('id')->on('item_codes');
            $table->foreign('spot_id')->references('id')->on('spots');
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('item_codes');
        Schema::dropIfExists('components');
        Schema::dropIfExists('categories');
        Schema::dropIfExists('brands');
        Schema::dropIfExists('brand_models');
        Schema::dropIfExists('spot_reports');
    }
};
