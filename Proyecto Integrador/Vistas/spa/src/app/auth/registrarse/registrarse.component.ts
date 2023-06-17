import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

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
    private router: Router
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

  ngOnInit(): void {}

  onEnviar(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      this.enviarFormulario();
    } else {
      this.form.markAllAsTouched();
    }
  }

  enviarFormulario() {
    const formData: FormData = new FormData();
    formData.append('email', this.form.get('email')?.value);
    formData.append('username', this.form.get('username')?.value);
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

    this.http
      .post('http://localhost:8000/api/auth/registro/', formData)
      .subscribe({
        next: (response: any) => {console.log(response),
          this.router.navigate(['/registro.ok'], { state: { response } })},

        error: (error: any) => {console.log(error),
          this.router.navigate(['/registro.error'], { state: { error : error.error } })},
      });
      
  }
}



