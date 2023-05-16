import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavNavegacionComponent } from './nav-navegacion/nav-navegacion.component';
import { FooterPiepaginaComponent } from './footer-piepagina/footer-piepagina.component';
import { AppRoutingModule } from '../app-routing.module';
AppRoutingModule

NavNavegacionComponent

@NgModule({
  declarations: [
    NavNavegacionComponent,
    FooterPiepaginaComponent,
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    NavNavegacionComponent,
    FooterPiepaginaComponent
  ]
})
export class SharedCompartidoModule { }
