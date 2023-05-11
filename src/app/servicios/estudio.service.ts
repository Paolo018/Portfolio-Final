import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from '../model/estudio.model';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {
  url = 'https://portfolio-back-end-wiyc.onrender.com/estudio/'
  constructor(private httpClient:HttpClient) { }

  public verEstudio(): Observable<Estudio[]>{
    return this.httpClient.get<Estudio[]>(this.url + 'lista');
  }

  public agregarEstudio(estudio: Estudio): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', Estudio);
  }

  public eliminarEstudio(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + 'eliminar/${id}');
  }
}
