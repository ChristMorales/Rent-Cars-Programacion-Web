import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ProductosComponent } from './productos/productos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
UsuariosComponent

@NgModule({
  declarations: [
    ContactoComponent,
    NosotrosComponent,
    ServiciosComponent,
    SucursalesComponent,
    InformacionComponent,
    ProductosComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ContactoComponent,
    NosotrosComponent,
    ServiciosComponent,
    SucursalesComponent,
    InformacionComponent,
    ProductosComponent,
    UsuariosComponent
  ]
})
export class PagesPaginasModule { }
