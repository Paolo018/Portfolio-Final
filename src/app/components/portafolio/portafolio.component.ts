import { Component, OnInit } from '@angular/core';
import { Portafolio } from 'src/app/model/portafolio.model';
import { PortafolioService } from 'src/app/servicios/portafolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit{
  portafolio: Portafolio[]=[];

  constructor(private tokenService: TokenService, private PortafolioService: PortafolioService) {}

  isLogged = false;

  ngOnInit(): void {
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

}
