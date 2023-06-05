import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { AppRoutingModuleTsModule } from '../app-routing.module.ts.module';
AppRoutingModuleTsModule

@NgModule({
  declarations: [
    LoginComponent,
    RegistrarseComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModuleTsModule
  ],

  exports:[
    LoginComponent,
    RegistrarseComponent
  ]
})
export class AuthModule { }
