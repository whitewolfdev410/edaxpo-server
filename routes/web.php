<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('/home');
    //return view('login');
    /*
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
    */
});

Route::get('home', function () {
    return view('home');
});

Route::middleware('auth')->get('/form', function () {
    return Inertia::render('Website/CreateSpot');
})->name('create-spot');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('form');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/admin/{page}', function($page){
    Inertia::setRootView("backoffice-app");
    return Inertia::render('Backoffice', [
        'pageName' => $page
    ])->withViewData(['pageName' => $page]);
})->middleware(['auth', 'verified'])->name('backoffice');

require __DIR__.'/auth.php';
