import { Injectable } from '@angular/core';
import { ConfigService } from './config-service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceorderService {
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

  searchsClients(client: any)
  {
    return this.http.post(this.URL_API+"/clients/search", client)
  }
 
  postmaterialSelected(selectedMaterial:any)
  {
    return this.http.post(this.URL_API+"/serviceorder/materialS", selectedMaterial)
  }

  postworkforceSelected(selectedWorkforce:any)
  {
    return this.http.post(this.URL_API+"/serviceorder/workforceS", selectedWorkforce)
  } 

  posttoolSelected(selectedTool:any)
  {
    return this.http.post(this.URL_API+"/serviceorder/toolS", selectedTool)
  } 

  postmachinarySelected(selectedMachinary:any)
  {
    return this.http.post(this.URL_API+"/serviceorder/machinaryS", selectedMachinary)
  } 

  putmaterialSelectedCount(countMaterial: any)
  {
    return this.http.put(this.URL_API + `/serviceorder/materialS/${countMaterial.cod_visit}`, countMaterial)
  }
  putworkForceSelectedCount(countWorkForce: any)
  {
    return this.http.put(this.URL_API + `/serviceorder/workForceS/${countWorkForce.cod_visit}`, countWorkForce)
  }
  putToolSelectedCount(countTool: any)
  {
    return this.http.put(this.URL_API + `/serviceorder/toolS/${countTool.cod_visit}`, countTool)
  }
  putMachinarySelectedCount(countMachinary: any)
  {
    return this.http.put(this.URL_API + `/serviceorder/machinaryS/${countMachinary.cod_visit}`, countMachinary)
  }
  registerOrder(order: any)
  {
    return this.http.put(this.URL_API+"/section/photos", order)
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


