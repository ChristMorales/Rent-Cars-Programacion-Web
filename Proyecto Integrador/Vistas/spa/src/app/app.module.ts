
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    principalComponent,
    InformacionComponent,
    ProductosComponent,
    ServiciosComponent,
    SucursalesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* Creación de rutas */

const rutas: Routes = [

  { path: './app.component.html', component: AppComponent },
  { path: './principal.html', component: principalComponent},
  { path: './informacion.html', component: InformacionComponent},
  { path: './productos.html', component: ProductosComponent},
  { path: './Servicios.html', component: ServiciosComponent},
  { path: './Sucursales.html', component: SucursalesComponent}, 
];


