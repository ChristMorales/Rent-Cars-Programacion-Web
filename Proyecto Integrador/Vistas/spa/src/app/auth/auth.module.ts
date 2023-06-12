import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { AppRoutingModuleTsModule } from '../app-routing.module.ts.module';
import { ReactiveFormsModule} from '@angular/forms'

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

  ],

  exports:[
    LoginComponent,
    RegistrarseComponent,
  ]
})
export class AuthModule { }
