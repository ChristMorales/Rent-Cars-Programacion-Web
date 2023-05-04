import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { InformacionComponent } from './shared/informacion/informacion.component';
import { SucursalesComponent } from './shared/sucursales/sucursales.component';
import { Routes } from '@angular/router';
import { ServiciosComponent } from './ecommerce/servicios/servicios.component';
import { CompraComponent } from './ecommerce/compra/compra.component';
import { ProductosComponent } from './ecommerce/productos/productos.component';
import { RouterModule } from '@angular/router';

const appRoutes: Routes = [

  { path: '', component: PrincipalComponent },
  { path: 'IniciarSesion', component: IniciarSesionComponent },
  { path: 'Nosotros', component: NosotrosComponent },
  { path: 'Contacto', component: ContactoComponent },
  { path: 'Registro', component: RegistroComponent },
  { path: 'Informacion', component: InformacionComponent },
  { path: 'Sucursales', component: SucursalesComponent },
  { path: 'Servicios', component: ServiciosComponent },
  { path: 'Compra', component: CompraComponent },
  { path: 'Productos', component: ProductosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent
    PrincipalComponent,
    NosotrosComponent,
    ContactoComponent,
    RegistroComponent,
    InformacionComponent,
    SucursalesComponent,
    ServiciosComponent,
    CompraComponent,
    ProductosComponent,
  ],


  imports: [
    BrowserModule,
    RoutesModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

