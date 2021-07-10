import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona, PersonaSL } from '../interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http:HttpClient) { }

  getall():Observable<Persona[]> {
    return this.http.get<Persona[]>(environment.api+"personas")
  }

  getallshort():Observable<PersonaSL[]> {
    return this.http.get<PersonaSL[]>(environment.api+"personas_sl")
  }

  getid(id: any):Observable<Persona>{
    return this.http.get<Persona>(environment.api+"personas/"+id);
  }

  postadd(item: Persona):Observable<Persona> {
    return this.http.post<Persona>(environment.api+"personas", item);
  }

  putedit(item: Persona):Observable<Persona> {
    return this.http.put<Persona>(environment.api+"personas", item);
  }
  
  del(id: any){
    console.log(environment.api+"personas/"+id);
    return this.http.delete(environment.api+"personas/"+id);
  }
}
