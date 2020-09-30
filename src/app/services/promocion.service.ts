import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';


@Injectable({
  providedIn: 'root'
})
export class PromocionService {

  readonly URL_API = this.config.getConfig().bussinesServer.url

  constructor(private http: HttpClient, private config:ConfigService)
  {
  }
  
  getPromocions()
  {
    return this.http.get(this.URL_API+"/promocion")
  }

  searchsPromocions(nameProduct: any)
  {
    return this.http.post(this.URL_API+"/promocion/search", nameProduct)
  }

  getPromocion(_id: string){
    return this.http.get(this.URL_API + "/promocionproducto"+ `/${_id}`)
  }

  registerPromocions(nameProduct: any)
  {
    return this.http.post(this.URL_API+"/promocion/create", nameProduct)
  }

  registerPromocionsProducts(data: any)
  {
    return this.http.post(this.URL_API+"/promocionproducto/create", data)
  }
  
  putPromocion(product: any){
    return this.http.put(this.URL_API + `/promocion/${product._id}`, product)
  }

  deletePromocion(_id: string){
    return this.http.delete(this.URL_API + "/promocion"+ `/${_id}`)
  }

}
