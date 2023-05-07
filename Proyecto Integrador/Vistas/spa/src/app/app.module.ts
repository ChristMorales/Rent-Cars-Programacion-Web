
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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

import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';


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

<<<<<<< HEAD

  imports: [
    BrowserModule,
    RoutesModule.forRoot(appRoutes),
    FormsModule,
=======
  imports: [
    BrowserModule,
    AppRoutingModule,

    LayoutModule,
    PagesModule
>>>>>>> 5d015f159c0ee3da86f09075ed74d5fcc6e762ff
  ],

  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

<<<<<<< HEAD
=======



>>>>>>> 999d5e9e3aff64a63b5d55004513bd872badaf67
>>>>>>> 5d015f159c0ee3da86f09075ed74d5fcc6e762ff
