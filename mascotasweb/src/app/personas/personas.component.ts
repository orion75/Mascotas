
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
    this.personaService.personas().subscribe(
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

}
