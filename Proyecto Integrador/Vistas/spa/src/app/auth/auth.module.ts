import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  exports: [
    RegisterComponent,
    LoginComponent,
  ]
})

export class AuthModule { }



