import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompraPagoService } from 'src/app/servicios/compra-pago.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago',
  templateUrl: 'pago.component.html',
  styleUrls: ['pago.component.css']
})
export class PagoComponent implements OnInit {
  pagoForm!: FormGroup;
  montoTotal!: number;
  statusPago!: any;

  constructor(private formBuilder: FormBuilder, private compraPago: CompraPagoService, private router: Router) {}

  ngOnInit(): void {
    this.createPagoForm();
    this.getMontoTotal();
    
  }

  private createPagoForm(): void {
    this.pagoForm = this.formBuilder.group({
      tarjetaNumero: [''],
      tarjetaMesVencimiento: [''],
      tarjetaAnioVencimiento: [''],
      tarjetaCodigo: [''],
      tarjetaTitular: [''],
      tarjetaDniTitular: ['']
    });
  }

  private getMontoTotal(): void {
    this.montoTotal = this.compraPago.getDatosCompra().monto_cobrado; 
  }

  onSubmit(): void {
    if (this.pagoForm.valid) {
      const pagoApi = this.pagoForm.value;
      this.compraPago.postPagarApi(pagoApi).subscribe({
        next: (response) => {
          this.statusPago = response;
          console.log(this.statusPago.respuesta);
          
          if (this.statusPago.respuesta == "aprobado"){
            this.compraPago.postProcesarAlquiler();
            alert("Pago exitoso! nos comicaremos con usted a la brevedad.")
            this.router.navigate([""]);
          }

          
        },
        error: (error) => {
          console.log(error);
        }
      });

      console.log('datos de pago:', pagoApi);
    } else {
      console.log('los datos no son correctos');
    }
  }
}

