import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ProductosComponent } from './productos/productos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AuthAutentificacionModule } from '../auth-autentificacion/auth-autentificacion.module';
import { AppRoutingModule } from '../app-routing.module';
import { RegistroProfesionalesComponent } from './registro-profesionales/registro-profesionales.component';
RegistroProfesionalesComponent
AppRoutingModule
AuthAutentificacionModule
UsuariosComponent

@NgModule({
  declarations: [
    ContactoComponent,
    NosotrosComponent,
    ServiciosComponent,
    SucursalesComponent,
    InformacionComponent,
    ProductosComponent,
    UsuariosComponent,
    RegistroProfesionalesComponent
  ],
  imports: [
    CommonModule,
    AuthAutentificacionModule,
    AppRoutingModule
  ],
  exports:[
    ContactoComponent,
    NosotrosComponent,
    ServiciosComponent,
    SucursalesComponent,
    InformacionComponent,
    ProductosComponent,
    UsuariosComponent,
    RegistroProfesionalesComponent
  ]
})
export class PagesPaginasModule { }
