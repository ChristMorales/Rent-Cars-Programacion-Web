import { Component } from '@angular/core';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent {
  imagen: string = '../../../assets/Imagenes/auto1.jpg';
  titulo: string = 'Sedan';
  descripcion: string = 'Vehículo de cuatro puertas ideal para viajar en familia.';
}
