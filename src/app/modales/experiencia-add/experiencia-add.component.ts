import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia-add',
  templateUrl: './experiencia-add.component.html',
  styleUrls: ['./experiencia-add.component.css']
})
export class ExperienciaAddComponent implements OnInit {
  form! : FormGroup;
  empresa: String = '';
  cargo: String = '';
  inicio: String = '';
  fin: String = '';
  descripcion: String = '';

  constructor(private formBuilder: FormBuilder, private experienciaService: ExperienciaService, private httpClient: HttpClient, private router: Router) {
  this.form= this.formBuilder.group({
    empresa: ['', Validators.required],
    cargo: ['', Validators.required],
    inicio: ['', Validators.required],
    fin: ['', Validators.required],
    descripcion: ['',Validators.required],
  }) 
}

get Empresa() {
  return this.form.get("empresa");
}

get Cargo() {
  return this.form.get("cargo");
}

get Inicio() {
  return this.form.get("inicio");
}

get Fin() {
  return this.form.get("fin");
}

get Descripcion() {
  return this.form.get("descripcion");
}

  ngOnInit(): void {

  }

  onCreate(): void {
    const expe = new Experiencia(this.empresa, this.cargo, this.inicio, this.fin, this.descripcion);
    this.experienciaService.crearExperiencia(expe).subscribe(data=>{
      alert("Experiencia añadida");
      window.location.reload();
}, err =>{
  alert("Fallo en la carga, intente nuevamente");
  this.form.reset();
});
  }
}
