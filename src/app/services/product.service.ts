import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';



@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {


  readonly URL_API = this.config.getConfig().bussinesServer.url

  constructor(private http: HttpClient, private config:ConfigService)
  {
  }
  ngOnInit()
  {
  }

  getProducts()
  {
    return this.http.get(this.URL_API+"/product")
  }

  searchsProducts(nameProduct: any)
  {
    return this.http.post(this.URL_API+"/product/search", nameProduct)
  }

  registerProducts(nameProduct: any)
  {
    return this.http.post(this.URL_API+"/product/create", nameProduct)
  }

  putProduct(product: any){
    return this.http.put(this.URL_API + `/product/${product._id}`, product)
  }

  deleteProduct(_id: string){
    return this.http.delete(this.URL_API + "/product"+ `/${_id}`)
  }
 
}
