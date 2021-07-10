import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Raza } from '../interfaces/raza';
import { RazasService } from '../services/razas.service';

@Component({
  selector: 'app-add-raza',
  templateUrl: './add-raza.component.html',
  styleUrls: ['./add-raza.component.css']
})
export class AddRazaComponent implements OnInit {

  constructor(private razaService:RazasService, private router:Router) { }
  addForm = new FormGroup({
    id: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }

  createForm(item:Raza){
    this.razaService.postadd(item).subscribe(
      (data) =>{
      console.log(item);
      this.router.navigate(['razas']);
    },
    (error)=>{
      console.log(error);
      alert('Ocurrio un Error');
    }
    );
  }

}
