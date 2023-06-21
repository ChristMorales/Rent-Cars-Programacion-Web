import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { DashboardService } from 'src/app/servicios/dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isAdminUser: boolean = false;
  autos: any[] = [];
  alquileres: any[] = [];
  usuarios: any[] = [];

  constructor(private usuarioService: UsuarioService, private dashboardService: DashboardService) {}

  ngOnInit(): void {
    // verificar si el usuario logueado es admin on init
    this.isAdminUser = this.usuarioService.getUsuario()?.is_admin;
    console.log(this.isAdminUser);

    if (this.isAdminUser) {
      this.cargarDatos();
    }
  }

  verAutosAlquilados(): void {  
    this.dashboardService.getAutos().subscribe({
      next: (response) => {
        this.autos = response;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  verAlquileres(): void {  
    this.dashboardService.getAlquileres().subscribe({
      next: (response) => {
        this.alquileres = response;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  
  verUsuarios(): void {  
    this.dashboardService.getUsuarios().subscribe({
      next: (response) => {
        this.usuarios = response;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }


  terminarAlquiler(nroNota: number): void {
    if (this.isAdminUser) {
      const confirmResult = confirm('Seguro que desea terminar el Alquiler?');
      if (confirmResult) {
        this.dashboardService.postCerrarAlquiler(nroNota).subscribe({
          next: (response) => {
            console.log(response.message);
            this.cargarDatos();
          },
          error: (error) => {
            console.log(error);
          }
        });
      }
    }
  }
  
  cargarDatos(): void {
    this.verAutosAlquilados();
    this.verAlquileres();
    this.verUsuarios();
  }
  
}
