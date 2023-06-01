import { NgModule } from '@angular/core';
import { LayoutModule } from '../layout/layout.module';
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
import { AppRoutingModuleTsModule } from '../app-routing.module.ts.module';
import { AuthModule } from '../auth/auth.module';
AuthModule
AppRoutingModuleTsModule
LayoutModule
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
    CommonModule,
    LayoutModule,
    AppRoutingModuleTsModule,
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
