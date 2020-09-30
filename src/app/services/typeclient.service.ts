import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';

@Injectable({
  providedIn: 'root'
})
export class TypeclientService {

  readonly URL_API = this.config.getConfig().bussinesServer.url

  constructor(private http: HttpClient, private config:ConfigService)
  {
  }

  ngOnInit()
  {
  }

  getTypeClients()
  {
    return this.http.get(this.URL_API+"/clientypes")
  }


}
