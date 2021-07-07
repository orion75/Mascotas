<?php

use App\Http\Controllers\HospedajeController;
use App\Http\Controllers\MascotaController;
use App\Http\Controllers\PersonaController;
use App\Http\Controllers\RazaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use function PHPSTORM_META\map;

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

Route::resource('personas', PersonaController::class);
Route::resource('razas', RazaController::class);
Route::resource('mascotas', MascotaController::class);
Route::resource('hospedajes', HospedajeController::class);
//Route::get('/personas', [PersonaController::class, 'index']);
//Route::post('/personas', [PersonaController::class, 'store']);



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
