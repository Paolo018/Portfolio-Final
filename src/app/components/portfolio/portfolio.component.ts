import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{
  proyecto:any;

  constructor(private datos:DatosService) {}

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.proyecto = data.proyecto;
    })
  }

}
