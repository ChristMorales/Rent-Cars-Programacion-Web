import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestApiService } from 'src/app/servicios/test-api.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  calcularDias() {
    const fechaInicio = new Date((<HTMLInputElement>document.getElementById('fechaInicio')).value);
    const fechaFin = new Date((<HTMLInputElement>document.getElementById('fechaFin')).value);

    if (fechaInicio && fechaFin) {
      const diffTime = Math.abs(fechaFin.getTime() - fechaInicio.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      (<HTMLInputElement>document.getElementById('diasAlquiler')).value = diffDays.toString();
    }
  }

  autoId: number = -1;
  autoObject: any;

  constructor(private route: ActivatedRoute, private testApiService: TestApiService) {}

  ngOnInit(): void {
    this.autoId = this.route.snapshot.params['ID_auto'];
    console.log('Auto ID:', this.autoId);

    this.testApiService.getAutoById(this.autoId)
      .subscribe((auto: any) => {
        this.autoObject = auto;
        console.log('Auto:', this.autoObject);
      });
  }
}
