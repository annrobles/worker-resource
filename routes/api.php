<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('/signup', ['as' => '', 'uses' => 'App\Http\Controllers\Api\AuthController@createUser']);
Route::post('/signin', ['as' => '', 'uses' => 'App\Http\Controllers\Api\AuthController@loginUser']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('skillset', 'App\Http\Controllers\SkillsetController');

Route::group(['middleware' => 'auth'], function () {

});
