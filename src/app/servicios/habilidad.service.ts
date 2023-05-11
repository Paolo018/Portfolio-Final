import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  url = 'https://portfolio-back-end-wiyc.onrender.com/habilidad/'
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(this.url + 'lista');
  }

  public crear(habilidad: Habilidad): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', habilidad);
  }

  public borrar(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + 'eliminar/${id}');
  }
}