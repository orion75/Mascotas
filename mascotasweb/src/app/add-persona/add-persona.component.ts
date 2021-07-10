import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../interfaces/persona';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-add-persona',
  templateUrl: './add-persona.component.html',
  styleUrls: ['./add-persona.component.css']
})
export class AddPersonaComponent implements OnInit {

  constructor(private personaService: PersonasService, private activerouter: ActivatedRoute, private router: Router) { }

  addForm = new FormGroup({
    id: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required)
  });

  ngOnInit(): void {

  }


  createForm(item: Persona) {
    this.personaService.postadd(item).subscribe(
      (data) => {
        console.log(item);
        this.router.navigate(['personas']);
      },
      (error) => {
        console.log(error);
        alert('Ocurrio un Error');
      }
    );
  }

}
