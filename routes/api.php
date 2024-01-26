<?php

use App\Http\Controllers\Backoffice\AdminSpotController;
use App\Http\Controllers\Backoffice\AdminUserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormConfiguratioController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'middleware' => ['auth']
], function ($router) {
    // users
    Route::get('/users', [AdminUserController::class, 'items']);
    Route::get('/users/{id}', [AdminUserController::class, 'item']);
    Route::patch('/users/{id}', [AdminUserController::class, 'patchItem']);
    Route::delete('/users/{id}', [AdminUserController::class, 'deleteItem']);
    Route::post('/users', [AdminUserController::class, 'create']);

    // jobs
    Route::get('/spots', [AdminSpotController::class, 'items']);
    Route::get('/spots/{id}', [AdminSpotController::class, 'item']);
    Route::patch('/spots/{id}', [AdminSpotController::class, 'patchItem']);
    Route::delete('/spots/{id}', [AdminSpotController::class, 'deleteItem']);
    Route::post('/spots', [AdminSpotController::class, 'create']);

    Route::get('/form/{key}', [FormConfiguratioController::class, 'get']);
});

