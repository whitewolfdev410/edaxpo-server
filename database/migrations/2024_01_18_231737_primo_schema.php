<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up() : void
    {
        // Organization Table
        Schema::create('organization', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('group_id');
            $table->string('group_name');
            $table->json('billing_info');
            $table->string('website');
            $table->string('avatar');
            $table->string('cover');
            $table->string('capture');
            $table->string('primary_address');
            $table->double('primary_address_lat');
            $table->double('primary_address_lng');
            $table->boolean('active');
            $table->boolean('authorized');
            $table->timestamps();

            $table->foreign('group_id')->references('id')->on('organization');
        });
        // Users Table
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('name');
            $table->string('first_name');
            $table->string('last_name');
            $table->timestamp('phone')->nullable();
            $table->string('username')->nullable();
            $table->string('country')->nullable();
            $table->string('country_code')->nullable();
            $table->string('role')->nullable();
            $table->boolean('active')->default(0);
            $table->boolean('authorized')->default(0);
            $table->json('social_id')->nullable();
            $table->string('photo')->nullable();
            $table->json('billing_info')->nullable();
            $table->json('preferences_info')->nullable();
            $table->unsignedBigInteger('org_id')->nullable();
            $table->softDeletes();

            $table->foreign('org_id')->references('id')->on('organization');
        });
        Schema::create('spots', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('desc');
            $table->text('body');
            $table->string('cover');
            $table->json('data');
            $table->unsignedBigInteger('author_id');
            $table->timestamp('dies_on');
            $table->integer('score');
            $table->integer('views');
            $table->integer('likes');
            $table->string('status');
            $table->json('meta_data');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('author_id')->references('id')->on('users');
        });
        // ContactRequests Table
        Schema::create('contact_requests', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('spot_id');
            $table->unsignedBigInteger('author_id');
            $table->string('type');
            $table->string('email');
            $table->string('phone');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('spot_id')->references('id')->on('spots');
            $table->foreign('author_id')->references('id')->on('users');
        });

        // Vehicles Table
        Schema::create('vehicles', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('type');
            $table->string('category');
            $table->integer('ports');
            $table->string('brand');
            $table->string('model');
            $table->string('version');
            $table->integer('production');
            $table->integer('year');
            $table->string('engine');
            $table->string('power');
            $table->string('images');
            $table->timestamps();
            $table->softDeletes();
        });

        // MasterSettings Table
        Schema::create('master_settings', function (Blueprint $table) {
            $table->id();
            $table->string('key');
            $table->string('value');
            $table->timestamps();
            $table->softDeletes();
        });

        // Spots Table


        // SubscriptionPlans Table
        Schema::create('subscription_plans', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->timestamp('valid_to');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('user_id')->references('id')->on('users');
        });

        // WalletHistory Table
        Schema::create('wallet_history', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('reason');
            $table->float('charge');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('user_id')->references('id')->on('users');
        });




    }

    public function down() : void
    {
        Schema::dropIfExists('contact_requests');
        Schema::dropIfExists('vehicles');
        Schema::dropIfExists('master_settings');
        Schema::dropIfExists('spots');
        Schema::dropIfExists('subscription_plans');
        Schema::dropIfExists('wallet_history');
        Schema::dropIfExists('users');
        Schema::dropIfExists('organization');
    }
};
