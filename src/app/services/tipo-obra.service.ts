import { Injectable ,  OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';

@Injectable({
  providedIn: 'root'
})
export class TipoObraService implements OnInit{

  readonly URL_API = this.config.getConfig().bussinesServer.url

  constructor(private http: HttpClient, private config:ConfigService)
  {
  }

  ngOnInit()
  {
  }

  getTypeObras()
  {
    return this.http.get(this.URL_API+"/tipoobra")
  }

  searchsTypeObras(nameProduct: any)
  {
    return this.http.post(this.URL_API+"/tipoobra/search", nameProduct)
  }

  registerTypeObras(nameProduct: any)
  {
    return this.http.post(this.URL_API+"/tipoobra/create", nameProduct)
  }

  putTypeObra(product: any){
    return this.http.put(this.URL_API + `/tipoobra/${product._id}`, product)
  }

  deleteTypeObra(_id: string)
  {
    return this.http.delete(this.URL_API + "/tipoobra"+ `/${_id}`)
  }


}
