import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad.model';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent  implements OnInit{
  habilidades: Habilidad[]=[];
  constructor(private tokenService: TokenService, private habilidadService: HabilidadService) {}

  isLogged = false;

  ngOnInit(): void {
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  }