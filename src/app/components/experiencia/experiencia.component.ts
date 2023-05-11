import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Estudio } from 'src/app/model/estudio.model';
import { EstudioService } from 'src/app/servicios/estudio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  //esto es para traer distintos datos
  experiencias: Experiencia[]=[]; //se llama al modelo que es un array
  estudios: Estudio[]=[];

  constructor(private ExperienciaService:ExperienciaService, private EstudioService:EstudioService, private tokenService:TokenService) {}

  isLogged = false;

  ngOnInit(): void {
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
}
