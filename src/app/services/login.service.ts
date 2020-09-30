import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit {

  readonly URL_API = this.config.getConfig().bussinesServer.url
  constructor(
    private http: HttpClient, 
    private config:ConfigService) 
   {
   }

  ngOnInit(){}

  loginUser(dataUser: any)
  {
    return this.http.post(this.URL_API+'/login/validar', dataUser, {})
  }

}

