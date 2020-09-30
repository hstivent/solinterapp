import { Injectable ,  OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';

@Injectable({
  providedIn: 'root'
})
export class HerramientaService {

  readonly URL_API = this.config.getConfig().bussinesServer.url

  constructor(private http: HttpClient, private config:ConfigService)
  {
  }
  
  getHerramienta()
  {
    return this.http.get(this.URL_API+"/herramienta")
  }

  getSelectedTools(idvisit: string)
  {
    return this.http.get(this.URL_API+"/herramienta/selected"+  `/${idvisit}`)
  }

  getToolId(idCategory:String)
  {
    return this.http.get(this.URL_API+"/herramienta"+`/${idCategory}`)
  }

  searchs(nameProduct: any)
  {
    return this.http.post(this.URL_API+"/herramienta/search", nameProduct)
  }

  register(nameProduct: any)
  {
    return this.http.post(this.URL_API+"/herramienta/create", nameProduct)
  }

  put(product: any){
    return this.http.put(this.URL_API + `/herramienta/${product._id}`, product)
  }

  delete(_id: string)
  {
    return this.http.delete(this.URL_API + `/herramienta/${_id}`)
  }
}
