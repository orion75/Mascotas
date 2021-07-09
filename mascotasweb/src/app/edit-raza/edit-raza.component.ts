import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Raza } from '../interfaces/raza';
import { PersonasService } from '../services/personas.service';
import { RazasService } from '../services/razas.service';

@Component({
  selector: 'app-edit-raza',
  templateUrl: './edit-raza.component.html',
  styleUrls: ['./edit-raza.component.css']
})
export class EditRazaComponent implements OnInit {

  constructor(private razaService:RazasService, private activerouter:ActivatedRoute, private router:Router) { }

  item!: Raza;

  editForm = new FormGroup({
    id: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    let _id = this.activerouter.snapshot.paramMap.get('id');
    this.razaService.getid(_id).subscribe(
    (data: Raza)=>{
      this.item=data;
      this.editForm.setValue({
        'id': this.item.id,
        'nombre': this.item.nombre
      });
    },
    (error)=>{
      console.log(error);
      alert('Ocurrio un Error');
    }
    );
  }

  saveForm(item:Raza){
    this.razaService.putedit(item).subscribe(
      (data)=>{
      alert('Cambio realizado');
      this.router.navigate(['razas']);
    },
    (error)=>{
      console.log(error);
      alert('Ocurrio un Error');
    }
    );
  }

}
