<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth')->get('/users', function (Request $request) {
    return [
        'hydra:totalItems' => 1,
        'hydra:member' => \App\Models\User::all()
    ];
});
Route::middleware('auth')->get('/users/{id}', function ($id) {
    return  \App\Models\User::find($id);
});
