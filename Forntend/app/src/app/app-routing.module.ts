import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages-paginas/contacto/contacto.component';
import { InformacionComponent } from './pages-paginas/informacion/informacion.component';
import { NosotrosComponent } from './pages-paginas/nosotros/nosotros.component';
import { ProductosComponent } from './pages-paginas/productos/productos.component';
import { ServiciosComponent } from './pages-paginas/servicios/servicios.component';
import { SucursalesComponent } from './pages-paginas/sucursales/sucursales.component';
import { UsuariosComponent } from './pages-paginas/usuarios/usuarios.component';
import { IniciarSesionComponent } from './auth-autentificacion/iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './auth-autentificacion/registrarse/registrarse.component';
import { RegistroProfesionalesComponent } from './pages-paginas/registro-profesionales/registro-profesionales.component';
RegistroProfesionalesComponent
RegistrarseComponent
IniciarSesionComponent
UsuariosComponent
SucursalesComponent
ServiciosComponent
ProductosComponent
NosotrosComponent
InformacionComponent
ContactoComponent
const routes: Routes = [
  {path: 'contacto', component:ContactoComponent},
  {path: 'informacion', component:InformacionComponent},
  {path: 'nosotros', component:NosotrosComponent},
  {path: 'productos', component:ProductosComponent},
  {path: 'servicios', component:ServiciosComponent},
  {path: 'sucursales', component:SucursalesComponent},
  {path: 'usuarios', component:SucursalesComponent},
  {path: 'iniciarSesion', component:IniciarSesionComponent},
  {path: 'registrarse', component:RegistrarseComponent},
  {path: 'registroProfesionales', component:RegistroProfesionalesComponent},
  {path: '', redirectTo: './app.component', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
