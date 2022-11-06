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

Route::get('/clear', function() {
    Artisan::call('cache:clear');
    Artisan::call('config:clear');
    Artisan::call('config:cache');
    Artisan::call('view:clear');

    return "Cleared!";

 });

Route::post('/signup', ['as' => '', 'uses' => 'App\Http\Controllers\Api\AuthController@createUser']);
Route::post('/signin', ['as' => '', 'uses' => 'App\Http\Controllers\Api\AuthController@loginUser']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::apiResource('skillset', 'App\Http\Controllers\SkillsetController');
    Route::apiResource('student', 'App\Http\Controllers\StudentController');
    Route::apiResource('company', 'App\Http\Controllers\CompanyController');
    Route::apiResource('userLocation', 'App\Http\Controllers\UserLocationsController');
    Route::apiResource('userExperience', 'App\Http\Controllers\UserExperienceController');
    Route::apiResource('skillsetNeed', 'App\Http\Controllers\SkillsetNeedController');
    Route::apiResource('studentSkillset', 'App\Http\Controllers\StudentSkillsetController');
});
