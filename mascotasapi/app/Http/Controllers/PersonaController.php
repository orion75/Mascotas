<?php

namespace App\Http\Controllers;

use App\Models\Persona;
use Illuminate\Http\Request;
use SebastianBergmann\Environment\Console;

class PersonaController extends Controller
{
    /**
     * Display a listing of the resource.
     * GET http://127.0.0.1:8000/api/personas
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Persona::all();
    }


    /**
     * Store a newly created resource in storage.
     * POST http://127.0.0.1:8000/api/personas
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     * 
     */
    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required',
            'apellidos' => 'required',
            'direccion' => 'required',
            'telefono' => 'required'
        ]);
        return Persona::create($request->all());
    }

    /**
     * Display the specified resource.
     * GET http://127.0.0.1:8000/api/personas/id
     * @param  \App\Models\Persona  $persona
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Persona::find($id);
    }

    

    /**
     * Update the specified resource in storage.
     * PUT http://127.0.0.1:8000/api/personas
     * @param  \App\Models\Persona  $persona
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $request->validate([
            'nombre' => 'required',
            'apellidos' => 'required',
            'direccion' => 'required',
            'telefono' => 'required'
        ]);
        
        $persona = Persona::find($request->input('id'));
        $persona->update($request->all());
        return $persona;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Persona  $persona
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Persona::destroy($id);
    }
}
