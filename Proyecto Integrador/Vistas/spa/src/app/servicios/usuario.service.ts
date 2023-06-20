import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly USUARIO_KEY = 'usuario';
  private usuario: any;
  private token: string = "";
  usuarioChanged: EventEmitter<any> = new EventEmitter<any>();

  constructor(private http: HttpClient) {
    const storedUsuario = localStorage.getItem(this.USUARIO_KEY);
    this.usuario = storedUsuario ? JSON.parse(storedUsuario) : null;
  }

  getUsuario(): any {
    return this.usuario;
  }

  setUsuario(usuario: any): void {
    this.usuario = usuario;
    localStorage.setItem(this.USUARIO_KEY, JSON.stringify(usuario));
    this.usuarioChanged.emit(usuario); // Emit the event when the user information changes
  }

  clearUsuario(): void {
    this.usuario = null;
    localStorage.removeItem(this.USUARIO_KEY);
    this.usuarioChanged.emit(null); // Emit the event when the user information is cleared
  }

  isAuthenticated(): boolean {
    return !!this.usuario;
  }

  isAdmin(): boolean {
    return this.usuario && this.usuario.is_admin;
  }


  login(email: string, password: string): void {
    this.http.post('http://127.0.0.1:8000/api/auth/login/', { email, password })
      .subscribe({
        next: (response: any) => {
          console.log(response);
          if (response.user) {
            const usuario = {
              email: response.user.email,
              nombre: response.user.nombre,
              apellido: response.user.apellido,
              is_admin: response.user.is_admin,
              token: response.token
            };
            this.setUsuario(usuario);
          }
          localStorage.setItem('token', this.token);
        },
        error: (error: any) => {
          console.log(error);
        }
      });
  }


  logout(): void {
    this.http.post('http://127.0.0.1:8000/api/auth/logout/', {}).subscribe({
      next: (response: any) => {
        console.log(response);
        this.clearUsuario();
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  getToken(): string {
    console.log(this.token);
    
    return this.token;
  }
}
