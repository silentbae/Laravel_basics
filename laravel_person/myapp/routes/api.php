<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ControllerPerson;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::get('persondetails', [ControllerPerson::class, 'index']);
Route::post('/addperson', [ControllerPerson::class, 'addPerson']);
Route::post('/addaddress', [ControllerPerson::class, 'addAddress']);
Route::post('/fileupload', [ControllerPerson::class, 'fileUpload']);