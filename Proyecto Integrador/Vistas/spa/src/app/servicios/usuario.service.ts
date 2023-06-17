import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly USUARIO_KEY = 'usuario';
  private usuario: any;

  constructor() {
    const storedUsuario = localStorage.getItem(this.USUARIO_KEY);
    this.usuario = storedUsuario ? JSON.parse(storedUsuario) : null;
  }

  getUsuario(): any {
    return this.usuario;
  }

  setUsuario(usuario: any): void {
    this.usuario = usuario;
    localStorage.setItem(this.USUARIO_KEY, JSON.stringify(usuario));
  }

  clearUsuario(): void {
    this.usuario = null;
    localStorage.removeItem(this.USUARIO_KEY);
  }

  isAuthenticated(): boolean {
    return !!this.usuario;
  }
}
