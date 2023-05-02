import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosComponent } from './servicios/servicios.component';
import { ProductosComponent } from './productos/productos.component';
import { CompraComponent } from './compra/compra.component';



@NgModule({
  declarations: [
    ServiciosComponent,
    ProductosComponent,
    CompraComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EcommerceModule { }
