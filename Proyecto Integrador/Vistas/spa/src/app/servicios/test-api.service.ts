import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestApiService {

  constructor(private http: HttpClient) { 
    console.log("Servicio test esta corriendo");
  }
  
  testEndPoint:string = "http://localhost:3000/autos";
  mostrarEquipo(): Observable <any> {

    return this.http.get(this.testEndPoint)


    
  }

}
