import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  readonly URL_API = this.config.getConfig().bussinesServer.url

  constructor(private http: HttpClient, private config:ConfigService)
  {
  }

  ngOnInit()
  {
  }

  getUsers()
  {
    return this.http.get(this.URL_API+"/usuario")
  }

  getUserByPunto(id: any)
  {
    return this.http.get(this.URL_API + `/usuario/${id}`)
  }

  searchsUsers(nameProduct: any)
  {
    return this.http.post(this.URL_API+"/usuario/search", nameProduct)
  }

  registerUsers(nameProduct: any)
  {
    return this.http.post(this.URL_API+"/usuario/create", nameProduct)
  }

  putUser(product: any){
    return this.http.put(this.URL_API + `/usuario/${product._id}`, product)
  }

  deleteUser(_id: string){
    return this.http.delete(this.URL_API + "/usuario"+ `/${_id}`)
  }
}
