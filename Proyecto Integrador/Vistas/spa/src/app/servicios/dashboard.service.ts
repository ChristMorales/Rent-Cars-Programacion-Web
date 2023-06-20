import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private autosAlquilados = 'http://127.0.0.1:8000/api/autos/alquilados';
  private alquileresEnCurso = "http://127.0.0.1:8000/api/alquileres/";
  private usuarios = "http://127.0.0.1:8000/api/usuarios/";
  private cerrarAlquiler = 'http://127.0.0.1:8000/api/cerraralquiler/';

  constructor(private http: HttpClient, private usuarioService: UsuarioService) {}

  private getToken(): string | null {
    return localStorage.getItem('token');
  }

  getAutos(): Observable<any[]> {
    const token = this.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    });
    const options = { headers: headers };
    return this.http.get<any[]>(this.autosAlquilados, options);
  }

  getAlquileres(): Observable<any[]> {
    const token = this.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    });
    const options = { headers: headers };
    return this.http.get<any[]>(this.alquileresEnCurso, options);
  }

  getUsuarios(): Observable<any[]> {
    const token = this.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    });
    const options = { headers: headers };
    return this.http.get<any[]>(this.usuarios, options);
  }

  postCerrarAlquiler(nroNota: number): Observable<any> {
    const nota = { Nro_nota: nroNota };
    const token = this.getToken();

    if (token) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`
      });
      const options = { headers: headers };
    
      return this.http.post<any>(this.cerrarAlquiler, nota, options);
    } else {
      console.log(this.getToken());
      
      return this.http.post<any>(this.cerrarAlquiler, nota);
      
    }
  }
  

}