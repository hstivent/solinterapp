import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  readonly URL_API = this.config.getConfig().bussinesServer.url

  constructor(private http: HttpClient, private config:ConfigService)
  {
  }
  ngOnInit()
  {
  }


  SendUri(nameUser: any)
  {
    return this.http.post(this.URL_API+"/upload/create", nameUser)
  }
}
