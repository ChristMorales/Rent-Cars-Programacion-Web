import { Injectable } from '@angular/core';
import { DatosCompra } from './datos-compra';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class CompraPagoService {
  private datosCompra!: DatosCompra;
  private datosPago: any;
  constructor(private http: HttpClient, private usuario: UsuarioService) { 
  }
  private getToken(): string | null {
    return localStorage.getItem('token');
  }

  setDatosCompra(objeto: DatosCompra){
    this.datosCompra = objeto;
    console.log(objeto);
    
  }

  getDatosCompra(): DatosCompra{
    return this.datosCompra;
  }

  postPagarApi(datosPago:any): Observable<any> {
    const url: string = "http://127.0.0.1:8000/api/pagar/";
    const datos = datosPago;
    const token = this.getToken();

    if (token) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`
      });
      const options = { headers: headers };
    
      return this.http.get<any>(url);
    } else {
      console.log(this.getToken());
      
      return this.http.get<any>(url);
      
    }
  }

  postProcesarAlquiler(): Observable<any> {
    this.datosCompra.ID_cliente = this.usuario.getUsuarioID();
    this.datosCompra.ID_auto = Number(this.datosCompra.ID_auto);

    
    const url: string = "http://127.0.0.1:8000/api/procesaralquiler/";
    const datos = this.datosCompra;
    const token = this.getToken();

    if (token) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`
      });
      const options = { headers: headers };
      console.log(datos);
      
    
      return this.http.post<any>(url, { datos }, options);
    } else {
      console.log(this.getToken());
      
      return this.http.post<any>(url, datos);
      
    }
  }
}


