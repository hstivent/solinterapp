import { Injectable, OnInit } from '@angular/core';
import { ConfigService } from './config-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkforceService implements OnInit {

  readonly URL_API = this.config.getConfig().bussinesServer.url

  constructor(private http: HttpClient, private config:ConfigService)
  {
  }
  ngOnInit()
  {
  }
  getWorkforce()
  {
    return this.http.get(this.URL_API+"/workforce")
  }
  getWorkForceId(idCategory: string)
  {
    return this.http.get(this.URL_API+`/workforce/${idCategory}`)
  }
  getSelectedWorkforce(idvisit: string)
  {
    return this.http.get(this.URL_API+"/workforce/selected"+  `/${idvisit}`)
  }
  register(workf: any)
  {
    return this.http.post(this.URL_API+"/workforce", workf)
  }

  put(workf: any){
    return this.http.put(this.URL_API + `/workforce/${workf.id}`, workf)
  }

  delete(_id: string)
  {
    return this.http.delete(this.URL_API + `/workforce/${_id}`)
  }
}