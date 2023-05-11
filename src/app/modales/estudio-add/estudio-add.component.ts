import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { Estudio } from 'src/app/model/estudio.model';
import { EstudioService } from 'src/app/servicios/estudio.service';

@Component({
  selector: 'app-estudio-add',
  templateUrl: './estudio-add.component.html',
  styleUrls: ['./estudio-add.component.css']
})
export class EstudioAddComponent implements OnInit {

  form: FormGroup;
  id!: number;
  titulo : String= '';
  institucion: String= '';
  inicio: String= '';
  fin: String= '';
  descripcion: String= '';

  constructor(private formBuilder: FormBuilder, private EstudioService: EstudioService) {
    //Creamos el grupo de controles para el formulario
    this.form= this.formBuilder.group({
      titulo: ['', [Validators.required]],
      institucion: ['', [Validators.required]],
      inicio: [''],
      fin: [''],
      descripcion: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {  
  }

  get Titulo(){
    return this.form.get("Titulo");
  }

  get Institucion(){
    return this.form.get("Institucion");
  }

  get Inicio(){
    return this.form.get("Inicio");
  }


  get Fin(){
    return this.form.get("Fin");
  }

  get Descripcion(){
    return this.form.get("Descripcion");
  }
  
  //Validaciones
  get TituloValid(){
    return this.Titulo?.touched && !this.Titulo?.valid;
  }

  get InstitucionValid(){
    return this.Institucion?.touched && !this.Institucion?.valid;
  }

  get DescripcionValid(){
    return this.Descripcion?.touched && !this.Descripcion?.valid;
  }

  onCreate(): void {
    const est = new Estudio(this.titulo, this.institucion, this.inicio, this.fin, this.descripcion);
    this.EstudioService.agregarEstudio(est).subscribe(data=>{alert("Estudio añadido")
  window.location.reload();
}, err =>{
  alert("Fallo en la carga, intente nuevamente");
  window.location.reload();
});
  }

  limpiar(): void {
    this.form.reset();
  }
  
}

