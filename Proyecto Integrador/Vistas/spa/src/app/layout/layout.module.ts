import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModuleTsModule } from '../app-routing.module.ts.module';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';


AppRoutingModuleTsModule

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent
  ],


  imports: [
    CommonModule,
    AppRoutingModuleTsModule
  ],

  exports: [
    FooterComponent,
    HeaderComponent, 
    NavbarComponent,
    CommonModule
  ]
})


export class LayoutModule { }