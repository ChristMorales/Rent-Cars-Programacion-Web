import { Component } from '@angular/core';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent {
  calcularDias() {
    const fechaInicio = new Date((<HTMLInputElement>document.getElementById('fechaInicio')).value);
    const fechaFin = new Date((<HTMLInputElement>document.getElementById('fechaFin')).value);

    if (fechaInicio && fechaFin) {
      const diffTime = Math.abs(fechaFin.getTime() - fechaInicio.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      (<HTMLInputElement>document.getElementById('diasAlquiler')).value = diffDays.toString();
    }
  }
}





















// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-compra',
//   templateUrl: './compra.component.html',
//   styleUrls: ['./compra.component.css']
// })

// export class CompraComponent {
//   @Input() auto!: Auto;

//   reservar() {
//     // Lógica para realizar la reserva del auto
//     console.log('Reservar auto:', this.auto);
//   }
// }

// interface Auto {
//   modelo: string;
//   descripcion: string;
//   precioAlquiler: number;
//   imageUrl: string;
// }





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
