import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { AppRoutingModuleTsModule } from '../app-routing.module.ts.module';

AppRoutingModuleTsModule
ReactiveFormsModule

@NgModule({
  declarations: [
    LoginComponent,
    RegistrarseComponent,
  ],

  imports: [
    CommonModule,
    AppRoutingModuleTsModule,
    ReactiveFormsModule,
    FormsModule
  ],

  exports: [
    LoginComponent,
    RegistrarseComponent,
  ]
})
export class AuthModule { }



