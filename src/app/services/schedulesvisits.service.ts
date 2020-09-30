import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';

@Injectable({
  providedIn: 'root'
})
export class SchedulesvisitsService implements OnInit {
  
  readonly URL_API = this.config.getConfig().bussinesServer.url

  constructor(private http: HttpClient, private config:ConfigService)
  {
  }
  ngOnInit()
  {
  }
  getSchedules(query: any)
  {
    return this.http.get(this.URL_API+`/schedulevisits?iduser=${query.iduser}&typeUser=${query.typeUser}`)
  }

  getSchedulesClient(query: any)
  {
    return this.http.get(this.URL_API+`/schedulevisits/client?iduser=${query.iduser}&typeUser=${query.typeUser}&clientid=${query.clientid}`)
  }

  getSchedulesPen(user:any)
  {
    return this.http.post(this.URL_API+"/schedulevisits/visitpen", user)
  }

  getSchedulePen(user:any)
  {
    return this.http.post(this.URL_API+"/schedulevisits/visitspen", user)
  }

  putSchedulesPen(user:any)
  {
    return this.http.put(this.URL_API+"/schedulevisits/visitspen", user)
  }

  getScheduleso(schedule: String)
  {
    return this.http.get(this.URL_API+`/schedulevisits/${schedule}`)
  }

  getSection(schedule: String)
  {
    return this.http.get(this.URL_API+`/section/${schedule}`)
  }
  /*getClients()
  {
    return this.http.get(this.URL_API+"/clients")
  }*/

  registerSchedules(schedule: any)
  {
    return this.http.post(this.URL_API+"/schedulevisits/create", schedule)
  }

  putSchedule(schedule: any){
    return this.http.put(this.URL_API + `/schedulevisits/${schedule._id}`, schedule)
  }
}
