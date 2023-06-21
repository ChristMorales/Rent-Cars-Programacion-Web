import { Component, OnInit } from '@angular/core';
import { TestApiService } from 'src/app/servicios/test-api.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  public productosA : any = [];
  mostrarProductos: boolean = true; 
  public productosImg : any = [];
  constructor(private productosS : TestApiService, private usuarioService: UsuarioService) {

  }
  isAuthenticated: boolean = false;

  ngOnInit() : void {
    
    this.productosS.getAutosDisponibles()
    .subscribe(resp => {console.log(resp);
          this.productosA = resp;
    })

    // verificar si el usuario logueado esta logueado on init
    this.isAuthenticated = this.usuarioService.isAuthenticated();
    
    console.log(this.isAuthenticated)
  }
   
  }



