import { Injectable } from '@angular/core';
import { ConfigService } from './config-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  readonly URL_API = this.config.getConfig().bussinesServer.url

  constructor(private http: HttpClient, private config:ConfigService) { }

  registerSection(section: any) {
    return this.http.post(this.URL_API+"/section", section)
  }

  getSection(idsection: number) {
    return this.http.get(this.URL_API+`/section/show/${idsection}`)
  }
}
