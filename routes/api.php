<?php

use Illuminate\Http\Request;
// use Illuminate\Routing\Route;
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

Route::group(['prefix' => 'auth'], function () {
    Route::post('login', 'UserController@login');
    Route::post('register', 'UserController@register');
    Route::get('register/activate/{token}', 'UserController@registerActivate');
    Route::group([
        'middleware' => 'auth:api',
        'prefix' => 'users'
    ], function () {
        Route::get('logout', 'UserController@logout');
    });
});

// publisher api

// question managment
Route::group([
    'prefix' => 'question'
], function () {
    Route::get('', 'QuestionController@index');
    Route::post('create', 'QuestionController@store');
    Route::get('{quesiton_id}', 'QuestionController@show');
    Route::put('{question_id}/edit', 'QuestionController@update');
    Route::delete('{question_id}', 'QuestionController@destroy');

    // get answer
    Route::get('{question_id}/answer', 'AnswerController@index');
    Route::post('{question_id}/answer', 'AnswerController@store');
    Route::group([
        'prefix' => 'answer'
    ], function () {
        Route::get('{id}', 'AnswerController@show');
        Route::put('{id}', 'AnswerController@update');
        Route::delete('{id}', 'AnswerController@destroy');
    });
});

Route::group([
    'namespace' => 'Auth',
    'middleware' => 'api',
    'prefix' => 'password'
], function () {
    Route::post('create', 'ResetPasswordController@create');
    Route::get('find/{token}', 'ResetPasswordController@find');
    Route::post('reset', 'ResetPasswordController@reset');
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
