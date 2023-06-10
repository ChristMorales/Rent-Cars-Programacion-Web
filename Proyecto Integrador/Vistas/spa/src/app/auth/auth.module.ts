import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { AppRoutingModuleTsModule } from '../app-routing.module.ts.module';
AppRoutingModuleTsModule

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
  ],

  imports: [
    CommonModule,
    AppRoutingModuleTsModule
  ],

  exports: [
    RegisterComponent,
    LoginComponent,
  ]
})
export class AuthModule { }



