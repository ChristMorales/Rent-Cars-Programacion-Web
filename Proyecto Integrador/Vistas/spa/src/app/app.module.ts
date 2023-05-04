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







  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

