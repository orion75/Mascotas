import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../interfaces/persona';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit {
  
  persona!: Persona;
  editForm = new FormGroup({
    id: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required)
  });

  constructor(private personaService:PersonasService, private activerouter:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let personaid = this.activerouter.snapshot.paramMap.get('id');
    this.personaService.getid(personaid).subscribe(
    (data: Persona)=>{
      this.persona=data;
      this.editForm.setValue({
        'id': this.persona.id,
        'nombre': this.persona.nombre,
        'apellidos': this.persona.apellidos,
        'direccion': this.persona.direccion,
        'telefono': this.persona.telefono
      });
    },
    (error)=>{
      console.log(error);
      alert('Ocurrio un Error');
    }
    );
  }
  
  
  saveForm(item:Persona){
    this.personaService.putPersona(item).subscribe(
      (data)=>{
      alert('Cambio realizado');
      this.router.navigate(['personas']);
    },
    (error)=>{
      console.log(error);
      alert('Ocurrio un Error');
    }
    );
    //console.log(item);
  }

}
