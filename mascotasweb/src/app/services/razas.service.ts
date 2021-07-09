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

  getrazas():Observable<Raza[]>{
    return this.http.get<Raza[]>(environment.api+"razas");
  }

  getrazasid(id: any):Observable<Raza>{
    return this.http.get<Raza>(environment.api+"razas/"+id);
  }

  postrazas(item: Raza):Observable<Raza> {
    return this.http.post<Raza>(environment.api+"razas", item);
  }

  putrazas(item: Raza):Observable<Raza> {
    return this.http.put<Raza>(environment.api+"razas", item);
  }
}
