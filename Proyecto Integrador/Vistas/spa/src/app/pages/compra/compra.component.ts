import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestApiService } from 'src/app/servicios/test-api.service';

@Component({
  selector: 'app-compra',
  templateUrl: 'compra.component.html',
  styleUrls: ['compra.component.css']
})
export class CompraComponent implements OnInit {
  autoId: number = -1;
  autoObject: any;

  fechaInicio: string | undefined;
  fechaFin: string | undefined;
  diasAlquiler: number | undefined;
  montoTotal: number | undefined;

  constructor(private route: ActivatedRoute, private testApiService: TestApiService) {}

  private getToken(): string | null {
    return localStorage.getItem('token');
  }

  ngOnInit(): void {
    this.autoId = this.route.snapshot.params['ID_auto'];
    console.log('Auto ID:', this.autoId);

    this.testApiService.getAutoById(this.autoId).subscribe((auto: any) => {
      this.autoObject = auto;
      console.log('Auto:', this.autoObject);
    });

    const fechaInicioInput = (<HTMLInputElement>document.getElementById('fechaInicio'));
    const fechaFinInput = (<HTMLInputElement>document.getElementById('fechaFin'));

    const today = new Date().toISOString().split('T')[0];
    fechaInicioInput.min = today;

    fechaInicioInput.addEventListener('change', () => {
      fechaFinInput.min = fechaInicioInput.value;
    });
  }

  fechaInicioChanged(event: any): void {
    this.fechaInicio = event.target.value;
  }

  fechaFinChanged(event: any): void {
    this.fechaFin = event.target.value;
    this.calcularDias();
  }

  calcularDias(): void {
    console.log('metodo calcular dias');

    if (this.fechaInicio && this.fechaFin && this.fechaFin >= this.fechaInicio) {
      const fechaInicio = new Date(this.fechaInicio);
      const fechaFin = new Date(this.fechaFin);
      const diffTime = Math.abs(fechaFin.getTime() - fechaInicio.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      this.diasAlquiler = diffDays;
      this.montoTotal = diffDays * this.autoObject.precioPorDia;
    } else {
      this.diasAlquiler = undefined;
      this.montoTotal = undefined;
    }
  }
}
