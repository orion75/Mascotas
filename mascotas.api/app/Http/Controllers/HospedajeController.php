<?php

namespace App\Http\Controllers;

use App\Models\Hospedaje;
use Illuminate\Http\Request;

class HospedajeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       return Hospedaje::all();
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
            'fecha_ingreso' => 'required',
            'id_mascota' => 'required'
        ]);
        return Hospedaje::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Hospedaje  $hospedaje
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Hospedaje::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Hospedaje  $hospedaje
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'fecha_ingreso' => 'required',
            'id_mascota' => 'required'
        ]);
        $hospedaje = Hospedaje::find($id);
        $hospedaje->update($request->all());
        return $hospedaje;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Hospedaje  $hospedaje
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Hospedaje::destroy($id);
    }
}
