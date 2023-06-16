import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  form: FormGroup;

  constructor(public formBuilder: FormBuilder, private http: HttpClient) {
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
    formData.append('fechaNacimiento', this.form.get('fechaNacimiento')?.value);

    this.http
      .post('http://localhost:8000/api/auth/registro/', formData)
      .subscribe({
        next: (response: any) => console.log(response),
        error: (error: any) => console.log(error),
      });
  }
}



// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder } from '@angular/forms';

// @Component({
//   selector: 'app-registrarse',
//   templateUrl: './registrarse.component.html',
//   styleUrls: ['./registrarse.component.css']
// })
// export class RegistrarseComponent implements OnInit{
//   [x: string]: any;
//   form: FormGroup;
//   constructor (public formBuilder: FormBuilder) {
//     this.form= this.formBuilder.group(
//       {
//         email: ['', []],
//         username: ['', []],
//         password: ['', []],
//         dni: ['', []],
//         nombre: ['', []],
//         apellido: ['', []],
//         fechaNacimiento: ['', []],
//       }
//     )}

//     ngOnInit(): void {
    
//     }
//     onEnviar(event: Event){
//       event.preventDefault;
//       if(this.form.valid){
//         alert("Enviar al servidor")
//       }else{
//         this.form.markAllAsTouched();
//       }

  
//     }
//     enviarFormulario() {
//       let formData: any = new FormData();
//       formData.append('email', this.form.get('email')?.value);
//       formData.append('username', this.form.get('username')?.value);
//       formData.append('password', this.form.get('password')?.value);
//       formData.append('dni', this.form.get('dni')?.value);
//       formData.append('nombre', this.form.get('nombre')?.value);
//       formData.append('apellido', this.form.get('apellido')?.value);
//       formData.append('fechaNacimiento', this.form.get('fechaNacimiento')?.value);
//       this['http'].post('http://localhost:8000/api/auth/registro/', formData)
//         .subscribe({
//           next: (response: any) => console.log(response),
//           error: (error: any) => console.log(error),
//         })
//     }
//   }
