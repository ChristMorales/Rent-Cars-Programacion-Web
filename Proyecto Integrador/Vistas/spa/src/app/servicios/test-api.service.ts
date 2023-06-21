import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestApiService {
  private autosDisponiblesEndpoint: string = "http://127.0.0.1:8000/api/autos/disponibles";
  private autosEndpoint: string = "http://127.0.0.1:8000/api/autos/";


  constructor(private http: HttpClient) {
    console.log("Servicio test está corriendo");
  }

  private getToken(): string | null {
    return localStorage.getItem('token');
  }
  
  getAutosDisponibles(): Observable<any> {
    return this.http.get<any>(this.autosDisponiblesEndpoint);
  }

  getAutoById(autoId: number): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    });
    const options = { headers: headers };
    const url = `${this.autosEndpoint}${autoId}/`;
    return this.http.get<any>(url, options);
  }
}

