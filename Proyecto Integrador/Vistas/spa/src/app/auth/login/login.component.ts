import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
FormBuilder

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder ){
    this.loginForm= this.formBuilder.group({
      mail:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]]
    })
  }

  get Mail(){
    return this.loginForm.get ("mail");
  }

  get Password(){
    return this.loginForm.get("password");
  }

  onEnviar(event: Event){
    event.preventDefault; /*Cancela la acción por defecto*/
    if (this.loginForm.valid){
      alert("ok servidor") /*se configura la comunicación con base de datos*/
    }else{
      this.loginForm.markAllAsTouched(); /*se activan las validaciones*/
    }
  }
}
