import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestApiService } from 'src/app/servicios/test-api.service';
import { Router } from '@angular/router';
import { CompraPagoService } from 'src/app/servicios/compra-pago.service';
import { DatosCompra } from 'src/app/servicios/datos-compra';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-compra',
  templateUrl: 'compra.component.html',
  styleUrls: ['compra.component.css']
})
export class CompraComponent implements OnInit {
  autoId!: number;
  autoObject: any;
  fechaInicio!: string;
  fechaFin!: string;
  diasAlquiler!: number;
  montoTotal!: number;
  datosCompra!: DatosCompra;
  formularioAlquiler!: FormGroup;
  fechaInicioSelected: boolean = false;
  fechaFinSelected: boolean = false;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private testApiService: TestApiService, private router: Router, private compraPagoService: CompraPagoService, private usuario: UsuarioService) {
    this.datosCompra = {} as DatosCompra;
  }



  ngOnInit(): void {
    this.formularioAlquiler = this.formBuilder.group({
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required]
    });
    
    this.autoId = this.route.snapshot.params['ID_auto'];
    console.log(this.autoId);

    this.testApiService.getAutoById(this.autoId).subscribe((auto: any) => {
      this.autoObject = auto;
      console.log('Auto:', this.autoObject);
    });

    const fechaInicioInput = this.formularioAlquiler.get('fechaInicio')?.value;
    const fechaFinInput = this.formularioAlquiler.get('fechaInicio')?.value;

    const today = new Date().toISOString().split('T')[0];
  fechaInicioInput.min = today;

  fechaInicioInput.addEventListener('change', () => {
    fechaFinInput.min = fechaInicioInput.value;

    });
  }

  fechaInicioChanged(event: any): void {
    this.fechaInicio = event.target.value;
    this.fechaInicioSelected = true;
  }

  fechaFinChanged(event: any): void {
    this.fechaFin = event.target.value;
    this.calcularDias();
    this.fechaFinSelected = true;
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
      console.log("calcular dias fallo");
      
    }
  }
  
  onSubmit(): void{
    console.log("submit!");
    
    this.datosCompra.fecha_alquiler = this.fechaInicio;
    this.datosCompra.fecha_devolucion = this.fechaFin;
    this.datosCompra.ID_auto = this.autoId;
    this.datosCompra.ID_cliente = this.usuario.getUsuario();
    this.datosCompra.monto_cobrado = this.montoTotal;
    this.datosCompra.servicio = "simple";
    this.datosCompra.ID_local = 2;
    this.compraPagoService.setDatosCompra(this.datosCompra);
    this.router.navigate(['/pago']);
  }
}
