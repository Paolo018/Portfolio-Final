import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Portafolio } from '../model/portafolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {
  url = 'https://portfolio-back-end-wiyc.onrender.com/portafolio/'
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Portafolio[]>{
    return this.httpClient.get<Portafolio[]>(this.url + 'lista');
  }

  public crear(portafolio: Portafolio): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', portafolio);
  }

  public borrar(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + 'eliminar/${id}');
  }
}