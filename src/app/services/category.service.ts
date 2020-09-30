import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';
@Injectable({
  providedIn: 'root'
})
export class CategoryService implements OnInit{

  
  readonly URL_API = this.config.getConfig().bussinesServer.url

  constructor(private http: HttpClient, private config:ConfigService)
  {
  }
  ngOnInit()
  {
  }
  getCategories()
  {
    return this.http.get(this.URL_API+"/categories")
  }

  getCategoriesM(type:any)
  {
    return this.http.get(this.URL_API+`/categories/type/${type}`)
  }

  getCategoriesId(idCategory:any)
  {
    return this.http.get(this.URL_API+"/categories/search",idCategory)
  }
  registerCategories(Category: any)
  {
    return this.http.post(this.URL_API+"/categories/create", Category)
  }

  putCategory(category: any){
    return this.http.put(this.URL_API + `/categories/${category._id}`, category)
  }
}
