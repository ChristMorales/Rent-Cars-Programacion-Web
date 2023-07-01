import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})

export class LogoutComponent {
  constructor(private usuarioService: UsuarioService, private router: Router){
  
  }
  cerrarSesion() {
    this.usuarioService.logout().subscribe({
          next: (response: any) => {
            console.log(response);
            this.usuarioService.clearUsuario();
            this.router.navigate([""]);
          },
          error: (error: any) => {
            console.log(error);
          }
        });;
  }

  mostrarUsuario() {
    this.usuarioService.getUsuario();
    
  }

}
