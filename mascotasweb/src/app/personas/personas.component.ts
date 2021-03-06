
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../interfaces/persona';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  public personas: Persona[] = [];

  constructor(private personaService:PersonasService, private router:Router) { }

  ngOnInit(): void {
    this.personaService.getall().subscribe(
      (data: Persona[])=>{
        this.personas=data;
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  editPersona(id:any){
    this.router.navigate(['edit-persona', id]);
  }

  addPersona(){
    this.router.navigate(['add-persona']);
  }

  eliminarPersona(persona: Persona){
    if(confirm('Desea eliminar el registro')){
      this.personaService.del(persona.id).subscribe(
        (data)=>{
          alert('Eliminado con exit');
          this.ngOnInit();
        },
        (error)=>{
          console.log(error);
          alert('Ocurrio un Error');
        });
    }
  }

}
