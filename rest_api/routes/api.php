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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Uses the App's namespace (API) + the prefix of all routes (api.)
Route::namespace('API')->name('api.')->group(function(){

    Route::prefix('/employee')->group(function(){
        
        Route::get('/',  'EmployeeController@index')->name('index_employee'); // get 'employee/' returns all employees
        
        Route::get('/{id}', 'EmployeeController@show')->name('single_employee'); // get 'employee/{id}' return the employee with id === {id}

        Route::post('/', 'EmployeeController@create')->name('create_employee'); // post 'employee/' creates a new employee

        Route::put('/{id}', 'EmployeeController@update')->name('update_employee'); // put 'employee/{id}' updates the employee with id = {id} 

        Route::delete('/{id}', 'EmployeeController@delete')->name('delete_employee'); // delete 'employee/{id}' delletes the employee with id = {id}

    });

    Route::prefix('/company')->group(function(){

        Route::get('/', 'CompanyController@index')->name('index_company'); // get 'company/' returns a collection of all companies 

        Route::get('/{id}', 'CompanyController@show')->name('single_company'); // get 'company/{id}' return the company with id === {id}

        Route::post('/', 'CompanyController@create')->name('create_company'); // post 'company/' creates a new company

        Route::put('/{id}', 'CompanyController@update')->name('update_company'); // put 'company/{id}' updates the company with id = {id} 

        Route::delete('/{id}', 'CompanyController@delete')->name('delete_company'); // delete 'company/{id}' delletes the company with id = {id}
    });
});
