import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  mensajeBienvenida: string = '¡Bienvenido al dashboard!';
  autosAlquilados: any[] = [
    { marca: 'Toyota', modelo: 'Corolla', anio: 2020 },
    { marca: 'Honda', modelo: 'Civic', anio: 2021 },
    { marca: 'Ford', modelo: 'Mustang', anio: 2019 },
    { marca: 'Chevrolet', modelo: 'Camaro', anio: 2022 },
    { marca: 'Nissan', modelo: 'Sentra', anio: 2020 }
  ];
  alquileresEnCurso: any[] = [
    { cliente: 'Angel DiMaria', fechaInicio: '2023-06-01', fechaFin: '2023-06-07' },
    { cliente: 'Lionel Messi', fechaInicio: '2023-06-03', fechaFin: '2023-06-10' },
    { cliente: 'Cristiano Ronaldo', fechaInicio: '2023-06-05', fechaFin: '2023-06-12' },
    { cliente: 'Emiliano Martinez', fechaInicio: '2023-06-07', fechaFin: '2023-06-14' },
    { cliente: 'Leandro Paredes', fechaInicio: '2023-06-09', fechaFin: '2023-06-16' }
  ];
}
