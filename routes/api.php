<?php

use Illuminate\Http\Request;

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
    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('logout', 'UserController@logout');
    });
    Route::group([
        'namespace' => 'auth',
        'prefix' => 'password',
        'middleware' => ['auth:api']
    ], function () {
        Route::post('create', 'PasswordResetController@create');
        Route::get('find/{token}', 'PasswordResetController@find');
        Route::post('reset', 'PasswordResetController@reset');
    });
});
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
