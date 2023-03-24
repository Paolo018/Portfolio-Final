import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group ({
      password: ['',[Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
       
    })
  }

  ngOnInit() {}

  get Password(){
    return this.form.get("password");
  }
 
  get Mail(){
   return this.form.get("email");
  }

  get PasswordInvalid(){
    return this.Password?.touched && !this.Password?.invalid;
  }

  get MailInvalid() {
    return false
  }
 

  onEnviar(event: Event){
    event.preventDefault; 

    if (this.form.invalid){
      alert("Error, haga de nuevo el formulario")
    }else{
      this.form.markAllAsTouched(); 
    }
 
  }

}