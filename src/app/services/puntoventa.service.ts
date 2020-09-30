import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';


@Injectable({
  providedIn: 'root'
})
export class PuntoventaService {

  readonly URL_API = this.config.getConfig().bussinesServer.url

  constructor(private http: HttpClient, private config:ConfigService)
  {
  }
  
  getPtvs()
  {
    return this.http.get(this.URL_API+"/ptv")
  }

  searchsPtv(nameProduct: any)
  {
    return this.http.post(this.URL_API+"/ptv/search", nameProduct)
  }

  registerPtvs(nameProduct: any)
  {
    return this.http.post(this.URL_API+"/ptv/create", nameProduct)
  }

  putPtvs(product: any){
    return this.http.put(this.URL_API + `/ptv/${product._id}`, product)
  }

  deletePtvs(_id: string){
    return this.http.delete(this.URL_API + "/ptv"+ `/${_id}`)
  }
}
