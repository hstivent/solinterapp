import { Injectable ,  OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';

@Injectable({
  providedIn: 'root'
})
export class MaquinariaService {

  readonly URL_API = this.config.getConfig().bussinesServer.url

  constructor(private http: HttpClient, private config:ConfigService)
  {
  }

  ngOnInit()
  {
  }

  get()
  {
    return this.http.get(this.URL_API+"/maquinaria")
  }

  getSelectedMachinary(idvisit: string)
  {
    return this.http.get(this.URL_API+"/maquinaria/selected"+  `/${idvisit}`)
  }

  getMachinaryId(id:any)
  {
    return this.http.get(this.URL_API+`/maquinaria/${id}`)
  }

  searchs(nameProduct: any)
  {
    return this.http.post(this.URL_API+"/maquinaria/search", nameProduct)
  }

  register(nameProduct: any)
  {
    return this.http.post(this.URL_API+"/maquinaria/create", nameProduct)
  }

  put(product: any){
    return this.http.put(this.URL_API + `/maquinaria/${product.id}`, product)
  }

  delete(_id: string)
  {
    return this.http.delete(this.URL_API + `/maquinaria/${_id}`)
  }
}
