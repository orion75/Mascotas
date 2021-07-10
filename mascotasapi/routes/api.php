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

//Route::resource('personas', PersonaController::class);
Route::get('personas', [PersonaController::class, 'index'])->name('persona.index');
Route::get('personas_sl', [PersonaController::class, 'shortlist'])->name('persona.shortlist');
Route::get('personas/{id}', [PersonaController::class, 'show'])->name('persona.show');
Route::post('personas', [PersonaController::class, 'store'])->name('persona.store');
Route::put('personas', [PersonaController::class, 'update'])->name('persona.update');
Route::delete('personas/{id}', [PersonaController::class, 'destroy'])->name('persona.destroy');
//Route::resource('razas', RazaController::class);
Route::get('razas', [RazaController::class, 'index'])->name('razas.index');
Route::get('razas/{id}', [RazaController::class, 'show'])->name('razas.show');
Route::post('razas', [RazaController::class, 'store'])->name('razas.store');
Route::put('razas', [RazaController::class, 'update'])->name('razas.update');
Route::delete('razas/{id}', [RazaController::class, 'destroy'])->name('razas.destroy');
//Route::resource('mascotas', MascotaController::class);
Route::get('mascotas', [MascotaController::class, 'index'])->name('mascotas.index');
Route::get('mascotas/{id}', [MascotaController::class, 'show'])->name('mascotas.show');
Route::post('mascotas', [MascotaController::class, 'store'])->name('mascotas.store');
Route::put('mascotas', [MascotaController::class, 'update'])->name('mascotas.update');
Route::delete('mascotas/{id}', [MascotaController::class, 'destroy'])->name('mascotas.destroy');

Route::resource('hospedajes', HospedajeController::class);
Route::put('hospedajes', [HospedajeController::class, 'update']);




Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
