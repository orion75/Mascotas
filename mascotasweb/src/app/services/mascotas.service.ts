import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mascota, MascotaList } from '../interfaces/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  constructor(private http:HttpClient) { }

  getall():Observable<MascotaList[]>{
    return this.http.get<MascotaList[]>(environment.api+"mascotas");
  }

  getid(id: any):Observable<MascotaList>{
    return this.http.get<MascotaList>(environment.api+"mascotas/"+id);
  }

  postadd(item: Mascota):Observable<Mascota> {
    return this.http.post<Mascota>(environment.api+"mascotas", item);
  }

  putedit(item: Mascota):Observable<Mascota> {
    return this.http.put<Mascota>(environment.api+"mascotas", item);
  }

  del(id: any){
    return this.http.delete(environment.api+"mascotas/"+id);
  }
}
