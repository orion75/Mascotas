import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hospedaje } from '../interfaces/hospedaje';
import { Mascota } from '../interfaces/mascota';
import { HospedajesService } from '../services/hospedajes.service';
import { MascotasService } from '../services/mascotas.service';

@Component({
  selector: 'app-edit-hospedaje',
  templateUrl: './edit-hospedaje.component.html',
  styleUrls: ['./edit-hospedaje.component.css']
})
export class EditHospedajeComponent implements OnInit {

  constructor(
    private mascotaService: MascotasService,
    private hospedajeService: HospedajesService,
    private router: Router,
    private activerouter:ActivatedRoute
  ) { }

  items!: Mascota[];
  hospedaje!: Hospedaje;
  editForm = new FormGroup({
    id: new FormControl('', Validators.required),
    id_mascota: new FormControl('', Validators.required),
    fecha_ingreso: new FormControl('', Validators.required),
    fecha_salida: new FormControl('')
  });

  ngOnInit(): void {
    let _id = this.activerouter.snapshot.paramMap.get('id')
    this.mascotaService.getall().subscribe(
      data => {
        this.items = data;
      },
      error => {
        console.error(error);
        alert('Ocurrio un error')
      }
    );

    this.hospedajeService.getid(_id).subscribe(
      data=>{
        this.hospedaje = data;
        console.log(this.hospedaje);
        this.editForm.setValue({
          'id': this.hospedaje.id,
          'id_mascota': this.hospedaje.id_mascota,
          'fecha_ingreso': this.hospedaje.fecha_ingreso,
          'fecha_salida': this.hospedaje.fecha_salida
        });
      }, error=>{
        console.log(error);
      }
    );
    
  }

  saveForm(item: Hospedaje) {
    this.hospedajeService.putedit(item).subscribe(
      data => {
        console.log(item);
        this.router.navigate(['hospedajes']);
      },
      error => {
        console.log(error);
        alert('Ocurrio un Error');
      });
  }

}
