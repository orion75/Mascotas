import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MascotaList } from '../interfaces/mascota';
import { MascotasService } from '../services/mascotas.service';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {

  constructor(private mascotaService:MascotasService, private router:Router) { }

  public items!: MascotaList[]

  ngOnInit(): void {
    this.mascotaService.getall().subscribe(
      data=>{
        this.items=data;
      },
      error=>{
        console.log(error);
      }
    );
  }

  edit(id:any){
    this.router.navigate(['edit-mascota', id]);
  }

  add(){
    this.router.navigate(['add-mascota']);
  }

  del(item: MascotaList){
    if(confirm('Desea eliminar el registro')){
      this.mascotaService.del(item.id).subscribe(
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
