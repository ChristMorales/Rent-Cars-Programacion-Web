import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ContactoComponent } from './contacto/contacto.component';
import { PrincipalComponent } from './principal/principal.component';
import { RegistroComponent } from './registro/registro.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ProductosComponent } from './productos/productos.component';
import { CompraComponent } from './compra/compra.component';
import { InformacionComponent } from './informacion/informacion.component';
import { SucursalesComponent } from './sucursales/sucursales.component';



@NgModule({
  declarations: [
    ContactoComponent,
    PrincipalComponent,
    RegistroComponent,
    IniciarSesionComponent,
    NosotrosComponent,
    ServiciosComponent,
    ProductosComponent,
    CompraComponent,
    InformacionComponent,
    SucursalesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
