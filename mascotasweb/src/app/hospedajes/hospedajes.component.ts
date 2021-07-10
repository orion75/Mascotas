import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HospedajeList } from '../interfaces/hospedaje';
import { HospedajesService } from '../services/hospedajes.service';

@Component({
  selector: 'app-hospedajes',
  templateUrl: './hospedajes.component.html',
  styleUrls: ['./hospedajes.component.css']
})
export class HospedajesComponent implements OnInit {

  constructor(
    private hospedajeService: HospedajesService,
    private router: Router
  ) { }
  items!: HospedajeList[];

  ngOnInit(): void {
    this.hospedajeService.getall().subscribe(
      data => {
        this.items = data; 
      }, error => { console.log(error); }
    );
  }

  edit(id:any){
    this.router.navigate(['edit-hospedaje', id]);
  }

  add(){
    this.router.navigate(['add-hospedaje']);
  }

  del(item: HospedajeList){
    if(confirm('Desea eliminar el registro')){
      this.hospedajeService.del(item.id).subscribe(
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
