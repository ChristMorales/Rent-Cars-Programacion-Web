import { Component } from '@angular/core';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})

export class IniciarSesionComponent {
  
  mostrarLogin: boolean=true; /*mostrar el formulario para iniciar sesión o registrarse*/
  mostrarRegistrarse: boolean=false;

  mostrarFormLogin(){
    this.mostrarLogin= true;
    this.mostrarRegistrarse=false;
  }

  mostrarFormRegistrarse(){
    this.mostrarRegistrarse=true;
    this.mostrarLogin=false;
  }

 }
  


