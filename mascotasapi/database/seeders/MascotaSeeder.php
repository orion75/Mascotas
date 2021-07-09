<?php

namespace Database\Seeders;

use App\Models\Mascota;
use Illuminate\Database\Seeder;

class MascotaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $mascota = new Mascota();
        $mascota->nombre = "Tonny";
        $mascota->id_persona = 1;
        $mascota->id_raza = 1;
        $mascota->tamano = "PEQUEÑO";
        $mascota->edad = 2;
        $mascota->save();

        $mascota = new Mascota();
        $mascota->nombre = "Laila";
        $mascota->id_persona = 2;
        $mascota->id_raza = 1;
        $mascota->tamano = "GRANDE";
        $mascota->edad = 2;
        $mascota->save();

        $mascota = new Mascota();
        $mascota->nombre = "Lulu";
        $mascota->id_persona = 3;
        $mascota->id_raza = 2;
        $mascota->tamano = "Mediano";
        $mascota->edad = 10;
        $mascota->save();
    }
}
