import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private autosAlquilados = 'http://127.0.0.1:8000/api/autos/alquilados';
  private alquileresEnCurso = "http://127.0.0.1:8000/api/alquileres/";
  private usuarios = "http://127.0.0.1:8000/api/usuarios/";
  private cerrarAlquiler = 'http://127.0.0.1:8000/api/cerraralquiler/';

  constructor(private http: HttpClient) {}

  getAutos(): Observable<any[]> {
    return this.http.get<any[]>(this.autosAlquilados);
  }

  getAlquileres(): Observable<any[]> {
    return this.http.get<any[]>(this.alquileresEnCurso);
  }

  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.usuarios);
  }

  postCerrarAlquiler(nroNota: number): Observable<any> {
    const nota = { Nro_nota: nroNota };
    return this.http.post<any>(this.cerrarAlquiler, nota);
  }


}