import { NgModule } from '@angular/core';
import { LayoutModule } from '../layout/layout.module';
import { CommonModule } from '@angular/common';
import { AppRoutingModuleTsModule } from '../app-routing.module.ts.module';
import { AuthModule } from '../auth/auth.module';

import { PrincipalComponent } from './principal/principal.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { RegistroComponent } from './registro/registro.component';
import { InformacionComponent } from './informacion/informacion.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
// import { ServiciosComponent } from './servicios/servicios.component';
import { ProductosComponent } from './productos/productos.component';
import { CompraComponent } from './compra/compra.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagoComponent } from './pago/pago.component';
import { ReactiveFormsModule } from '@angular/forms';


// AuthModule
// AppRoutingModuleTsModule
// LayoutModule
// ServiciosComponent
// CompraComponent


// const routes: Routes = [
//   { path: 'productos', component: ProductosComponent }
// ];

@NgModule({
  declarations: [
    PrincipalComponent,
    IniciarSesionComponent,
    NosotrosComponent,
    RegistroComponent,
    InformacionComponent,
    SucursalesComponent,
    // ServiciosComponent,
    ProductosComponent,
    CompraComponent,
    DashboardComponent,
    PagoComponent,
    
  ],

  imports: [
    CommonModule,
    LayoutModule,
    AppRoutingModuleTsModule,
    AuthModule,
    ReactiveFormsModule,
  ],

  exports: [
    PrincipalComponent, 
    IniciarSesionComponent, 
    NosotrosComponent, 
    RegistroComponent, 
    InformacionComponent,
    SucursalesComponent, 
    // ServiciosComponent,
    ProductosComponent,
    CompraComponent
   
  ]
  
})


export class PagesModule { }
