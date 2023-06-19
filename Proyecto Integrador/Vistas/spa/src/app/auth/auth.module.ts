import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { AppRoutingModuleTsModule } from '../app-routing.module.ts.module';
import { ReactiveFormsModule} from '@angular/forms';
import { RegistroOkComponent } from './registro.ok/registro.ok.component';
import { RegistroErrorComponent } from './registro.error/registro.error.component';
import { LogoutComponent } from './logout/logout.component'

AppRoutingModuleTsModule
ReactiveFormsModule


@NgModule({
  declarations: [
    LoginComponent,
    RegistrarseComponent,
    RegistroOkComponent,
    RegistroErrorComponent,
    LogoutComponent,
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
