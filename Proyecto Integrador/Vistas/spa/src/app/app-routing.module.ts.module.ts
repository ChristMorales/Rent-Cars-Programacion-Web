import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './layout/header/header.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';

import { CompraComponent } from './pages/compra/compra.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { RegistroComponent } from './pages/registro/registro.component';
// import { ServiciosComponent } from './pages/servicios/servicios.component';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';

import { LoginComponent } from './auth/login/login.component';
import { RegistrarseComponent } from './auth/registrarse/registrarse.component';
import { RegistroOkComponent } from './auth/registro.ok/registro.ok.component';
import { RegistroErrorComponent } from './auth/registro.error/registro.error.component';
// RegistrarseComponent
// LoginComponent
// RouterModule
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
  { path: '', component: PrincipalComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'navbar', component: NavbarComponent },

  {path: 'compra', component:CompraComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'informacion', component:InformacionComponent},
  {path: 'iniciarSesion', component:IniciarSesionComponent},
  {path: 'nosotros', component:NosotrosComponent},
  {path: 'productos', component:ProductosComponent},
  {path: 'registro', component:RegistroComponent},
  // {path: 'servicios', component:ServiciosComponent},
  {path: 'sucursales', component:SucursalesComponent},
  {path: 'login', component:LoginComponent},
  {path: 'registrarse', component:RegistrarseComponent},
  {path: '', redirectTo: './app.component', pathMatch: 'full'},
  {path: 'registro.ok', component:RegistroOkComponent},
  {path: 'registro.error', component:RegistroErrorComponent},
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
