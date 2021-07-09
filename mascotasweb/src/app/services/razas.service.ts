import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Raza } from '../interfaces/raza';

@Injectable({
  providedIn: 'root'
})
export class RazasService {

  constructor(private http:HttpClient) { }

  getall():Observable<Raza[]>{
    return this.http.get<Raza[]>(environment.api+"razas");
  }

  getid(id: any):Observable<Raza>{
    return this.http.get<Raza>(environment.api+"razas/"+id);
  }

  postadd(item: Raza):Observable<Raza> {
    return this.http.post<Raza>(environment.api+"razas", item);
  }

  putedit(item: Raza):Observable<Raza> {
    return this.http.put<Raza>(environment.api+"razas", item);
  }

  del(id: any){
    return this.http.delete(environment.api+"razas/"+id);
  }
}
