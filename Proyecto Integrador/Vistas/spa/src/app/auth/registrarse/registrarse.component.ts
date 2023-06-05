import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit{
  form: FormGroup;
  constructor (public formBuilder: FormBuilder) {
    this.form= this.formBuilder.group(
      {
        email: ['', []],
        username: ['', []],
        password: ['', []],
        dni: ['', []],
        nombre: ['', []],
        apellido: ['', []],
        fechaNacimiento: ['', []],
      }
    )
  }
  ngOnInit(): void {
    
  }
}
