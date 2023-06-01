import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { CompraComponent } from './pages/compra/compra.component';
// import { ContactoComponent } from './pages/contacto/contacto.component';
// import { InformacionComponent } from './pages/informacion/informacion.component';
// import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
// import { NosotrosComponent } from './pages/nosotros/nosotros.component';
// import { PrincipalComponent } from './pages/principal/principal.component';
// import { ProductosComponent } from './pages/productos/productos.component';
// import { RegistroComponent } from './pages/registro/registro.component';
// import { ServiciosComponent } from './pages/servicios/servicios.component';
// import { SucursalesComponent } from './pages/sucursales/sucursales.component';

import { HomeComponent } from './home.component';
import { OtherPageComponent } from './other-page.component';


HomeComponent
OtherPageComponent

RouterModule
// SucursalesComponent
// ServiciosComponent
// RegistroComponent
// ProductosComponent
// PrincipalComponent
// NosotrosComponent
// IniciarSesionComponent
// InformacionComponent
// ContactoComponent
// CompraComponent

const routes: Routes = [
  // {path: 'compra', component:CompraComponent},
  // {path: 'contacto', component:ContactoComponent},
  // {path: 'informacion', component:InformacionComponent},
  // {path: 'iniciarSesion', component:IniciarSesionComponent},
  // {path: 'nosotros', component:NosotrosComponent},
  // {path: 'principal', component:PrincipalComponent},
  // {path: 'productos', component:ProductosComponent},
  // {path: 'registro', component:RegistroComponent},
  // {path: 'servicios', component:ServiciosComponent},
  // {path: 'sucursales', component:SucursalesComponent},

  { path: '', component: HomeComponent },
  { path: 'other-page', component: OtherPageComponent },

  {path: '', redirectTo: './app.component', pathMatch: 'full'}
]

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule]
})

export class AppRoutingModuleTsModule { }
