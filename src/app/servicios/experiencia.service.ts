import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url = 'https://portfolio-back-end-wiyc.onrender.com/experiencia/'
  constructor(private httpClient:HttpClient) { }

  public verExperiencia(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.url + 'lista');
  }

  public crearExperiencia(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', Experiencia);
  }

  public borrarExperiencia(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + 'eliminar/${id}');
  }

  public editarExperiencia(id: number, experiencia: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.url + 'update/${id}', experiencia);
  }
}
