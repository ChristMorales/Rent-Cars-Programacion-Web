import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Injectable({
    providedIn: 'root'
  })
  class PermissionsService {
  
    constructor(private usuarioService: UsuarioService, private router: Router) {}
  
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const isUserAdmin = this.usuarioService.getUsuario()?.is_admin;
        if (isUserAdmin) {
        return true; //permitir acceso
        } else {
        this.router.navigate(['']); // redirige a ruta vacia /inicio
        return false; // denegar acceso
        }
    }
  }
  
  export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    return inject(PermissionsService).canActivate(next, state);
  }