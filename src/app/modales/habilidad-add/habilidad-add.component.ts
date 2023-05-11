import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad.model';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-habilidad-add',
  templateUrl: './habilidad-add.component.html',
  styleUrls: ['./habilidad-add.component.css']
})
export class HabilidadAddComponent implements OnInit {
  form : FormGroup;
  habilidad : String= '';
  porcentaje : String= '';
  clase : String= '';
  constructor(private formBuilder: FormBuilder, private habilidadService: HabilidadService, private router: Router) {
    //Creamos el grupo de controles para el formulario
    this.form= this.formBuilder.group({
      habilidad: ['', [Validators.required]],
      porcentaje: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      clase: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  get Habilidad() {
    return this.form.get("habilidad");
  }

  get Porcentaje() {
    return this.form.get("porcentaje");
  }

  get Clase() {
    return this.form.get("clase");
  }


  onCreate(): void {
    const habi = new Habilidad(this.habilidad, this.porcentaje, this.clase);
    this.habilidadService.crear(habi).subscribe(data => {
      alert("Habilidad añadida");
      window.location.reload();
    }, err => {
      alert("Falló en la carga, intente nuevamente");
      this.form.reset();
    })
  }
}
