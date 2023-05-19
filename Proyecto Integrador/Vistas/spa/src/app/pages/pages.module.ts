import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal/principal.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { RegistroComponent } from './registro/registro.component';
import { InformacionComponent } from './informacion/informacion.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ProductosComponent } from './productos/productos.component';
import { CompraComponent } from './compra/compra.component';
ServiciosComponent
CompraComponent

@NgModule({
  declarations: [
    PrincipalComponent,
    IniciarSesionComponent,
    ContactoComponent,
    NosotrosComponent,
    RegistroComponent,
    InformacionComponent,
    SucursalesComponent,
    ServiciosComponent,
    CompraComponent,
    ProductosComponent
  ],

  imports: [
    CommonModule
  ],

  exports: [
    PrincipalComponent, 
    IniciarSesionComponent, 
    ContactoComponent, 
    NosotrosComponent, 
    RegistroComponent, 
    InformacionComponent,
    SucursalesComponent, 
    ServiciosComponent,
   ProductosComponent,
   CompraComponent
  ]
  
})


export class PagesModule { }
