import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private usuarioService: UsuarioService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  iniciarSesion() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      this.http.post('http://127.0.0.1:8000/api/auth/login/', { email, password })
        .subscribe({
          next: (response: any) => {
            console.log(response);
          },
          error: (error: any) => {
            console.log(error);
          }
        });
        const usuario = {
          email: email,
          // agregar campos en Django
        };
  
        // Set the user in the UserService
        this.usuarioService.setUsuario(usuario);
    }
  }
}
