<?php

use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'web'], function () {
    Route::post('/auth/login', [LoginController::class, 'authenticate']);
    Route::post('/auth/logout', [LoginController::class, 'logout']);
});

Route::get('{reactRoutes}', function () {
    return view('welcome'); // your entry view
})->where('reactRoutes', '^((?!web).)*$'); // except 'web' word
