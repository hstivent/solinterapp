import { Injectable ,  OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';

@Injectable({
  providedIn: 'root'
})
export class TipocontratoService {

  readonly URL_API = this.config.getConfig().bussinesServer.url

  constructor(private http: HttpClient, private config:ConfigService)
  {
  }

  ngOnInit()
  {
  }

  get()
  {
    return this.http.get(this.URL_API+"/tipocontrato")
  }

  searchs(nameProduct: any)
  {
    return this.http.post(this.URL_API+"/tipocontrato/search", nameProduct)
  }

  register(nameProduct: any)
  {
    return this.http.post(this.URL_API+"/tipocontrato/create", nameProduct)
  }

  put(product: any){
    return this.http.put(this.URL_API + `/tipocontrato/${product._id}`, product)
  }

  delete(_id: string)
  {
    return this.http.delete(this.URL_API + "/tipocontrato"+ `/${_id}`)
  }
}
