import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})

export class CompraComponent {
  @Input() auto!: Auto;

  reservar() {
    // Lógica para realizar la reserva del auto
    console.log('Reservar auto:', this.auto);
  }
}

interface Auto {
  modelo: string;
  descripcion: string;
  precioAlquiler: number;
  imageUrl: string;
}





// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-compra',
//   templateUrl: './compra.component.html',
//   styleUrls: ['./compra.component.css']
// })
// export class CompraComponent {
//   imagen: string = '../../../assets/Imagenes/auto1.jpg';
//   titulo: string = 'Sedan';
//   descripcion: string = 'Vehículo de cuatro puertas ideal para viajar en familia.';
// }
