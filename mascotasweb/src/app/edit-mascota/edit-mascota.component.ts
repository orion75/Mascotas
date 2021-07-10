import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Mascota } from '../interfaces/mascota';
import { PersonaSL } from '../interfaces/persona';
import { Raza } from '../interfaces/raza';
import { MascotasService } from '../services/mascotas.service';
import { PersonasService } from '../services/personas.service';
import { RazasService } from '../services/razas.service';

@Component({
  selector: 'app-edit-mascota',
  templateUrl: './edit-mascota.component.html',
  styleUrls: ['./edit-mascota.component.css']
})
export class EditMascotaComponent implements OnInit {

  constructor(
    private razaServie: RazasService,
    private personaService: PersonasService,
    private mascotaService:MascotasService, 
    private activerouter:ActivatedRoute, 
    private router:Router) { }

  item!: Mascota;
  razas!: Raza[];
  personas!: PersonaSL[];
  lista: string[] = ["GRANDE", "MEDIANO", "PEQUEÑO"];

  editForm = new FormGroup({
    id: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    id_raza: new FormControl('', Validators.required),
    tamano: new FormControl('MEDIANO', Validators.required),
    edad: new FormControl('0', Validators.required),
    id_persona: new FormControl('', Validators.required)
  });

  ngOnInit(): void {

    let mascotaid = this.activerouter.snapshot.paramMap.get('id');
    this.mascotaService.getid(mascotaid).subscribe(
    data=>{
      this.item=data;
      this.editForm.setValue({
        'id': this.item.id,
        'nombre': this.item.nombre,
        'id_raza': this.item.id_raza,
        'tamano': this.item.tamano,
        'edad': this.item.edad,
        'id_persona': this.item.id_persona
      });
    },
    (error)=>{
      console.log(error);
      alert('Ocurrio un Error');
    }
    );

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
    this.mascotaService.putedit(item).subscribe(
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
