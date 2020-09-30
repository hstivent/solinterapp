import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';



@Injectable({
  providedIn: 'root'
})
export class VentasService{


  readonly URL_API = this.config.getConfig().bussinesServer.url

  constructor(private http: HttpClient, private config:ConfigService)
  {
  }
  
  searchsProductoVenta(nameProduct: any)
  {
    return this.http.post(this.URL_API+"/ventas/search", nameProduct)
  }

  getVentas()
  {
    return this.http.get(this.URL_API+"/ventas")
  }

  getVentasByPunto(_id: string)
  {
    return this.http.get(this.URL_API+"/ventas/facturado"+ `/${_id}`)
  }
  
  getTotalVentasByPunto(_id: string)
  {
    return this.http.get(this.URL_API+"/ventas/facturadototalvendido"+ `/${_id}`)
  }

  getTotalVenta()
  {
    return this.http.get(this.URL_API+"/ventas/total")
  }

  getTotalAdicional()
  {
    return this.http.get(this.URL_API+"/ventas/totaladicional")
  }

  getAdicionalesByPunto(_id: string)
  {
    return this.http.get(this.URL_API+"/ventas/adicionales"+ `/${_id}`)
  }
  
  getTotalVentaByPunto(_id: string)
  {
    return this.http.get(this.URL_API + "/ventas/total"+ `/${_id}`)
  }

}
