<?php

namespace App\Http\Controllers;

use App\Models\Mascota;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class MascotaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return DB::table('mascotas')
        ->join('personas', 'mascotas.id_persona', 'personas.id')
        ->join('razas', 'mascotas.id_raza', 'razas.id')
        ->select('mascotas.*', DB::raw('CONCAT (personas.nombre, " ", personas.apellidos) AS persona'), 'razas.nombre AS raza')
        ->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required',
            'id_persona' => 'required',
            'id_raza' => 'required',
            'tamano' => 'required',
            'edad' => 'required'
        ]);
        return Mascota::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Mascota  $mascota
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Mascota::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Mascota  $mascota
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $request->validate([
            'nombre' => 'required',
            'id_persona' => 'required',
            'id_raza' => 'required',
            'tamano' => 'required',
            'edad' => 'required'
        ]);
        $mascota = Mascota::find($request->input('id'));
        $mascota->update($request->all());
        return $mascota;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Mascota  $mascota
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Mascota::destroy($id);
    }
}
