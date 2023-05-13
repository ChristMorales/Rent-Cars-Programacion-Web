import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { InformacionComponent } from './informacion/informacion.component';
import { PrincipalComponent } from './principal/principal.component';
import { ProductosComponent } from './productos/productos.component';
import { ClsComponent } from './cls/cls.component';



@NgModule({
  declarations: [
    ContactoComponent,
    NosotrosComponent,
    ServiciosComponent,
    SucursalesComponent,
    InformacionComponent,
    PrincipalComponent,
    ProductosComponent,
    ClsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesPaginasModule { }
