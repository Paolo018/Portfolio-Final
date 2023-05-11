import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-sobremi-add',
  templateUrl: './sobremi-add.component.html',
  styleUrls: ['./sobremi-add.component.css']
})
export class SobremiAddComponent {

  form!: FormGroup;
  id!: number;
  nombre : String= '';
  apellido: String= '';
  edad: String= '';
  telefono: String= '';
  email: String= '';
  clave: String= '';
  direccion: String= '';
  sobremi: String= '';
  foto: String= '';

  constructor(private formBuilder: FormBuilder, private PersonaService: PersonaService) {
    //Creamos el grupo de controles para el formulario
    this.form= this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      edad: [''],
      telefono: [''],
      email: ['', [Validators.required]],
      clave: [''],
      direccion: [''],
      sobremi: [''],
      foto: [''],
    })
  }

  ngOnInit(): void {  
  }

  get Nombre(){
    return this.form.get("nombre");
  }

  get Apellido(){
    return this.form.get("apellido");
  }

  get Edad(){
    return this.form.get("Eedad");
  }


  get Telefono(){
    return this.form.get("telefono");
  }

  get Email(){
    return this.form.get("email");
  }

  get Clave(){
    return this.form.get("clave");
  }

  get Direccion(){
    return this.form.get("direccion");
  }

  get Sobremi(){
    return this.form.get("sobremi");
  }

  get Foto(){
    return this.form.get("foto");
  }

  onCreate(): void {
    const perso = new Persona(this.nombre, this.apellido, this.edad, this.telefono, this.email, this.clave, this.direccion, this.sobremi, this.foto);
    this.PersonaService.agregarPersona(perso).subscribe(data=>{alert("Persona añadida")
  window.location.reload();
}, err =>{
  alert("Fallo en la carga, intente nuevamente");
  window.location.reload();
});
  }
  
}

