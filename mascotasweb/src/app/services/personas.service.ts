import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http:HttpClient) { }

  personas():Observable<Persona[]> {
    return this.http.get<Persona[]>(environment.api+"personas")
  }

  save(persona:Persona){}

  getid(id: any):Observable<Persona>{
    console.log(environment.api+"personas/"+id);
    return this.http.get<Persona>(environment.api+"personas/"+id);
  }

  putPersona(item: Persona):Observable<Persona> {
    console.log(environment.api+"personas");
    return this.http.put<Persona>(environment.api+"personas", item);
  }

  postPersona(item: Persona):Observable<Persona> {
    console.log(environment.api+"personas");
    return this.http.post<Persona>(environment.api+"personas", item);
  }
}
