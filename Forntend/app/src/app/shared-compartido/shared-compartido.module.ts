import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavNavegacionComponent } from './nav-navegacion/nav-navegacion.component';
import { FooterPiepaginaComponent } from './footer-piepagina/footer-piepagina.component';
import { AppRoutingModule } from '../app-routing.module';
import { PaginasSocialesComponent } from './paginas-sociales/paginas-sociales.component';
PaginasSocialesComponent
AppRoutingModule
NavNavegacionComponent

@NgModule({
  declarations: [
    NavNavegacionComponent,
    FooterPiepaginaComponent,
    PaginasSocialesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    NavNavegacionComponent,
    FooterPiepaginaComponent,
    PaginasSocialesComponent
  ]
})
export class SharedCompartidoModule { }
