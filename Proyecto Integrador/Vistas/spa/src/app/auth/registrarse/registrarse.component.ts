import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css'],
  providers: [DatePipe] 
})
export class RegistrarseComponent implements OnInit {
  form: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private http: HttpClient,
    private datePipe: DatePipe,
    private router: Router,
    private usuario: UsuarioService
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      dni: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      fechaNacimiento: ['', [Validators.required]],
    });
  }

  email!: string;
  password!: string;
  ngOnInit(): void {}


  onSubmit() {
    const formData: FormData = new FormData();
    formData.append('email', this.form.get('email')?.value);
    this.email = this.form.get('username')?.value;
    formData.append('username', this.form.get('username')?.value);
    this.password = this.form.get('password')?.value;
    formData.append('password', this.form.get('password')?.value);
    formData.append('dni', this.form.get('dni')?.value);
    formData.append('nombre', this.form.get('nombre')?.value);
    formData.append('apellido', this.form.get('apellido')?.value);

    // cambio formato de fecha para que coincida con el de Django (yyyy-MM-dd)
    const fechaNacimientoValue = this.datePipe.transform(
      this.form.get('fechaNacimiento')?.value,
      'yyyy-MM-dd'
    );
    formData.append('fechaNacimiento', fechaNacimientoValue || '');
    
    this.http.post('http://127.0.0.1:8000/api/auth/registro/', formData)
      .subscribe({
        next: (response: any) => {
          console.log(response);   
          this.usuario.login(this.email, this.password);     
          alert("Registro exitoso! por favor inicie sesion");
          this.router.navigate(['/iniciarSesion']);
        },

        error: (error: any) => {console.log(error),
          alert("Ocurrio un error, intente nuevamente");
        }
      });
  }
}
