import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  iniciarSesion() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      this.usuarioService.login(email, password).subscribe({
        next: (response: any) => {
          console.log(response);
          if (response.user) {
            const usuario = {
              ID_cliente: response.user.ID_cliente,
              email: response.user.email,
              nombre: response.user.nombre,
              apellido: response.user.apellido,
              is_admin: response.user.is_admin,
              token: response.token
            };
            this.usuarioService.setToken(response.token); // Store the token in the 'token' property
            this.usuarioService.setUsuario(usuario);
            this.router.navigate(['']);
          };
        },
        error: (error: any) => {
          console.log(error);
        }
      });


    }
  }
}
