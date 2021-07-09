<?php

namespace Database\Seeders;

use App\Models\Persona;
use Faker\Provider\ar_JO\Person;
use Illuminate\Database\Seeder;

class PersonaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Persona::factory(10)->create();
        
    }
}
