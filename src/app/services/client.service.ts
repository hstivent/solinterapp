import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  readonly URL_API = this.config.getConfig().bussinesServer.url

  constructor(private http: HttpClient, private config:ConfigService)
  {
  }
  ngOnInit()
  {
  }

  getClients()
  {
    return this.http.get(this.URL_API+"/clients")
  }

  getClient(id:String)
  {
    return this.http.get(this.URL_API+`/clients/${id}`)
  }

  searchsClients(client: any)
  {
    return this.http.post(this.URL_API+"/clients/search", client)
  }

  registerClient(client: any)
  {
    return this.http.post(this.URL_API+"/clients/create", client)
  }

  putClient(client: any)
  {
    return this.http.put(this.URL_API + `/clients/${client._id}`, client)
  }

  deleteClient(_id: string)
  {
    return this.http.delete(this.URL_API + "/clients"+ `/${_id}`)
  }
}
