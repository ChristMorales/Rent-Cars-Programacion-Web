import { Component, OnInit } from '@angular/core';
import { TestApiService } from 'src/app/servicios/test-api.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  public productosA : any = [];
  mostrarProductos: boolean = true; 
  public productosImg : any = [];
  constructor(private productosS : TestApiService) {

  }
  // constructor(private router: Router) {}

  // reservar(): void {
  //   // Lógica de reserva
  //   // ...

  //   // Redireccionar a la página de compras
  //   this.router.navigateByUrl('/compra');
  // }

  ngOnInit() : void {

    this.productosS.mostrarEquipo()
    .subscribe(resp => {console.log(resp);
          this.productosA = resp;
    })
   
  }
}


