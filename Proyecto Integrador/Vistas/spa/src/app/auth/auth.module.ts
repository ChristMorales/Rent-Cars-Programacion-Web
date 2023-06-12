import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { AppRoutingModuleTsModule } from '../app-routing.module.ts.module';
import { ReactiveFormsModule} from '@angular/forms'

AppRoutingModuleTsModule
ReactiveFormsModule


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
<<<<<<< HEAD
=======
    RegistrarseComponent,
>>>>>>> 53e5f134348f9a618b23739be70bedd2516c9e92
  ],

  imports: [
    CommonModule,
    AppRoutingModuleTsModule,
    ReactiveFormsModule,

  ],

  exports: [
    RegisterComponent,
    LoginComponent,
<<<<<<< HEAD
=======
    RegistrarseComponent,
>>>>>>> 53e5f134348f9a618b23739be70bedd2516c9e92
  ]
})
export class AuthModule { }



