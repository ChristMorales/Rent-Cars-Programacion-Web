import { Component, OnInit } from '@angular/core';
import { TestApiService } from 'src/app/servicios/test-api.service';

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

  ngOnInit() : void {

    this.productosS.mostrarEquipo()
    .subscribe(resp => {console.log(resp);
          this.productosA = resp;
    })
    for (let elem of this.productosA){
      this.productosImg.push(elem.imagen);
    }
  }
}


