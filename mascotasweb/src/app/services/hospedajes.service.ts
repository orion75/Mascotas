import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hospedaje, HospedajeList } from '../interfaces/hospedaje';

@Injectable({
  providedIn: 'root'
})
export class HospedajesService {

  constructor(private http:HttpClient) { }

  getall():Observable<HospedajeList[]>{
    return this.http.get<HospedajeList[]>(environment.api+"hospedajes");
  }

  getid(id: any):Observable<Hospedaje>{
    return this.http.get<Hospedaje>(environment.api+"hospedajes/"+id);
  }

  postadd(item: Hospedaje):Observable<Hospedaje> {
    return this.http.post<Hospedaje>(environment.api+"hospedajes", item);
  }

  putedit(item: Hospedaje):Observable<Hospedaje> {
    return this.http.put<Hospedaje>(environment.api+"hospedajes", item);
  }

  del(id: any){
    return this.http.delete(environment.api+"hospedajes/"+id);
  }
}
