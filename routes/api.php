<?php

use App\Http\Controllers\Backoffice\AdminUserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

});
