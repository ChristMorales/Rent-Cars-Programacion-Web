import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedCompartidoModule } from './shared-compartido/shared-compartido.module';
import { PagesPaginasModule } from './pages-paginas/pages-paginas.module';
import { AuthAutentificacionModule } from './auth-autentificacion/auth-autentificacion.module';
AuthAutentificacionModule
PagesPaginasModule
SharedCompartidoModule

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedCompartidoModule,
    PagesPaginasModule,
    AuthAutentificacionModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
