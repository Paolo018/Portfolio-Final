import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent  implements OnInit{
  habilidadest:any;
  habilidadesp:any;
  
  constructor(private datos:DatosService) {}

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.habilidadesp= data.habilidadesp;
      this.habilidadest = data.habilidadest;
    })
  }
}
