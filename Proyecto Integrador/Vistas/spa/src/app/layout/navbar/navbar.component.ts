import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {
  isAuthenticated: boolean;
  isAdmin: boolean = false;
  usuario: string = "";
  private usuarioSubscription: Subscription;

  constructor(private usuarioService: UsuarioService) {
    this.isAuthenticated = usuarioService.isAuthenticated();
    if (this.isAuthenticated) {
      this.updateUserInfo();
    }

    // Subscribe to login and logout events
    this.usuarioSubscription = this.usuarioService.usuarioChanged.subscribe(() => {
      this.isAuthenticated = this.usuarioService.isAuthenticated();
      if (this.isAuthenticated) {
        this.updateUserInfo();
      } else {
        this.isAdmin = false;
        this.usuario = '';
      }
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from the usuarioService
    this.usuarioSubscription.unsubscribe();
  }

  private updateUserInfo(): void {
    this.isAdmin = this.usuarioService.isAdmin();
    this.usuario = this.usuarioService.getUsuario()?.nombre;
  }
}
