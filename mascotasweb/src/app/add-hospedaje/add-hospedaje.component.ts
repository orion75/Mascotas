import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MascotasService } from '../services/mascotas.service';
import { Mascota } from '../interfaces/mascota'
import { Hospedaje } from '../interfaces/hospedaje';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HospedajesService } from '../services/hospedajes.service';

@Component({
  selector: 'app-add-hospedaje',
  templateUrl: './add-hospedaje.component.html',
  styleUrls: ['./add-hospedaje.component.css']
})
export class AddHospedajeComponent implements OnInit {

  constructor(
    private mascotaService: MascotasService,
    private hospedajeService: HospedajesService,
    private router: Router
  ) { }

  items!: Mascota[];
  addForm= new FormGroup({
    id: new FormControl('', Validators.required),
    id_mascota: new FormControl('', Validators.required),
    fecha_ingreso: new FormControl('', Validators.required),
    fecha_salida: new FormControl('')
  });

  ngOnInit(): void {
    this.mascotaService.getall().subscribe(
      data => {
        this.items = data;
        console.log(this.items);
      },
      error => {
        console.error(error);
        alert('Ocurrio un error')
      });
  }

  saveForm(item: Hospedaje) {
    this.hospedajeService.postadd(item).subscribe(
      data=>{
        console.log(item);
        this.router.navigate(['hospedajes']);
      },
      error=>{
        console.log(error);
        alert('Ocurrio un Error');
      });
  }

}
