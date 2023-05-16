import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
IniciarSesionComponent
RegistrarseComponent


@NgModule({
  declarations: [
    IniciarSesionComponent,
    RegistrarseComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    IniciarSesionComponent,
    RegistrarseComponent
  ],
})
export class AuthAutentificacionModule { }
