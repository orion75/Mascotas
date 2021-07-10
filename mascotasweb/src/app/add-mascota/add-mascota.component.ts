import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Mascota } from '../interfaces/mascota';
import { Persona, PersonaSL } from '../interfaces/persona';
import { Raza } from '../interfaces/raza';
import { MascotasService } from '../services/mascotas.service';
import { PersonasService } from '../services/personas.service';
import { RazasService } from '../services/razas.service';

@Component({
  selector: 'app-add-mascota',
  templateUrl: './add-mascota.component.html',
  styleUrls: ['./add-mascota.component.css']
})
export class AddMascotaComponent implements OnInit {

  constructor(
    private mascotaService: MascotasService,
    private razaServie: RazasService,
    private personaService: PersonasService,
    private router: Router) { }

  addForm = new FormGroup({
    id: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    id_raza: new FormControl('', Validators.required),
    tamano: new FormControl('MEDIANO', Validators.required),
    edad: new FormControl('0', Validators.required),
    id_persona: new FormControl('', Validators.required)
  });

  razas!: Raza[];
  personas!: PersonaSL[];
  lista: string[] = ["GRANDE", "MEDIANO", "PEQUEÑO"];

  ngOnInit(): void {
    this.razaServie.getall().subscribe(
      (data) => {
        this.razas = data;
      },
      (error) => {
        console.log(error);
        alert('Ocurrio un Error');
      }
    );
    this.personaService.getallshort().subscribe(
      (data) => {
        this.personas = data;
      },
      (error) => {
        console.log(error);
        alert('Ocurrio un Error');
      }
    );
  }

  saveForm(item: Mascota) {
    this.mascotaService.postadd(item).subscribe(
      data => {
        console.log(item);
        this.router.navigate(['mascotas']);
      },
      error => {
        console.log(error);
        alert('Ocurrio un Error');
      }
    );
  }

}
