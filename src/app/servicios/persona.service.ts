import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  url = 'https://portfolio-back-end-wiyc.onrender.com/persona/'
  constructor(private httpClient: HttpClient) { }

  public verPersonas(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.url + 'lista');
  }

  public agregarPersona(persona: Persona): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', persona);
  }

  public eliminarPersona(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + 'eliminar/${id}');
  }
}