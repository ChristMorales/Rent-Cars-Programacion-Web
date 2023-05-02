import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './contacto/contacto.component';
import { PrincipalComponent } from './principal/principal.component';
import { RegistroComponent } from './registro/registro.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { NosotrosComponent } from './nosotros/nosotros.component';



@NgModule({
  declarations: [
    ContactoComponent,
    PrincipalComponent,
    RegistroComponent,
    IniciarSesionComponent,
    NosotrosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
