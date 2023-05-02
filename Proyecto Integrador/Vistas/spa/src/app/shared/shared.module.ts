import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformacionComponent } from './informacion/informacion.component';
import { ProductosComponent } from './productos/productos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { SucursalesComponent } from './sucursales/sucursales.component';



@NgModule({
  declarations: [
    InformacionComponent,
    ProductosComponent,
    ServiciosComponent,
    SucursalesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
