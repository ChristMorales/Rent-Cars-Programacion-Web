import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})

export class LogoutComponent {
  constructor(private usuarioService: UsuarioService){
  
  }
  cerrarSesion() {
    this.usuarioService.logout();
  }

  mostrarUsuario() {
    this.usuarioService.getUsuario();
    
  }

}
