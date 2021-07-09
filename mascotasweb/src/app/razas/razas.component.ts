import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Raza } from '../interfaces/raza';
import { RazasService } from '../services/razas.service';

@Component({
  selector: 'app-razas',
  templateUrl: './razas.component.html',
  styleUrls: ['./razas.component.css']
})
export class RazasComponent implements OnInit {
  public razas!: Raza[]

  constructor(private razaService: RazasService, private router:Router) { }

  ngOnInit(): void {
    this.razaService.getall().subscribe(
      (data: Raza[])=>{
        this.razas=data;
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  editRaza(id:any){
    this.router.navigate(['edit-raza', id]);
  }

  addRaza(){
    this.router.navigate(['add-raza']);
  }

  eliminarRaza(item: Raza){
    if(confirm('Desea eliminar el registro')){
      this.razaService.del(item.id).subscribe(
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
