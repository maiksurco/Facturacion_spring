import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../env/env';
import { ResponseData } from 'src/app/interface/interfaces';
@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private URL_API: string = environment.ApiUrl;

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.URL_API}/proveedor`);
  }

  enviarDatos(datos: any) {
    return this.http.post(`${this.URL_API}/proveedor/guardar`, datos);
  }

  eliminarPorId(id: number) {
    const url = `${this.URL_API}/proveedor/eliminar/${id}`;
    return this.http.delete(url);
  }

  actualizar(datos: any) {
    return this.http.put(`${this.URL_API}/proveedor/actualizar`, datos);
  }
  verificarExistencia(cod: string) {
    return this.http.get<ResponseData>(`${this.URL_API}/proveedor/verificar-proveedor/${cod}`);
  }

}
