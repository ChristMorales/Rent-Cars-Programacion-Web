import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

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

  getUsuarioID(): number {
    return this.usuario.ID_cliente;
  }
  setUsuario(usuario: any): void {
    this.usuario = usuario;
    localStorage.setItem(this.USUARIO_KEY, JSON.stringify(usuario));
    this.usuarioChanged.emit(usuario); // emito evento para actualizar acceso a perfil
  }

  setToken(token: string): void{
    this.token = token;
    localStorage.setItem('token', this.token)
  }

  clearUsuario(): void {
    this.usuario = null;
    localStorage.removeItem(this.USUARIO_KEY);
    this.usuarioChanged.emit(null); // emito evento para borrar perfil y mostrar inicie sesion
  }

  isAuthenticated(): boolean {
    return !!this.usuario;
  }

  isAdmin(): boolean {
    return this.usuario && this.usuario.is_admin;
  }


  // login(email: string, password: string): void {
  //   this.http.post('http://127.0.0.1:8000/api/auth/login/', { email, password })
  //     .subscribe({
  //       next: (response: any) => {
  //         console.log(response);
  //         if (response.user) {
  //           const usuario = {
  //             ID_cliente: response.user.ID_cliente,
  //             email: response.user.email,
  //             nombre: response.user.nombre,
  //             apellido: response.user.apellido,
  //             is_admin: response.user.is_admin,
  //             token: response.token
  //           };
  //           this.token = response.token; // Store the token in the 'token' property
  //           this.setUsuario(usuario);
  //           this.router.navigate(['']);
  //         }
  //         localStorage.setItem('token', this.token);
  //       },
  //       error: (error: any) => {
  //         console.log(error);
  //       }
  //     });
  // }
  
  

  // logout(): void {
  //   const token = this.token;
  //   console.log(this.token);
    
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     Authorization: `Token ${token}`
  //   });
  //   const options = { headers: headers };
  //   this.http.post('http://127.0.0.1:8000/api/auth/logout/', options).subscribe({
  //     next: (response: any) => {
  //       console.log(response);
  //       this.clearUsuario();
  //       this.router.navigate([""]);
  //     },
  //     error: (error: any) => {
  //       console.log(error);
  //     }
  //   });
  // }

  login(email: string, password: string): Observable<any[]> {
    return this.http.post<any[]>('http://127.0.0.1:8000/api/auth/login/', { email, password });
  }

  logout(): Observable<any[]> {
    const token = this.token;
    console.log(this.token);
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    });
    const options = { headers: headers };
    return this.http.post<any[]>('http://127.0.0.1:8000/api/auth/logout/', options);
  }

}
