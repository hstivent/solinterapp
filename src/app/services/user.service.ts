import { Injectable, OnInit } from '@angular/core';
import { ConfigService } from './config-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  readonly URL_API = this.config.getConfig().bussinesServer.url

  constructor(private http: HttpClient, private config:ConfigService)
  {
  }
  ngOnInit()
  {
  }
  getUsers()
  {
    return this.http.get(this.URL_API+"/users")
  }
  getUserType()
  {
    return this.http.get(this.URL_API+"/usertype")
  }

  registerUsers(nameUser: any)
  {
    return this.http.post(this.URL_API+"/users/create", nameUser)
  }
  
  validUser(email: any, doc: any, user: any)
  {
    return this.http.get(this.URL_API+`/users/valid/?email=${email}&doc=${doc}&user=${user}`)
  }

  putUser(user: any){
    return this.http.put(this.URL_API + `/users/${user._id}`, user)
  }

  deleteUser(user: any){
    return this.http.delete(this.URL_API + `/users/${user}`)
  }

  searchsUsers(user: any)
  {
    return this.http.post(this.URL_API+"/users/search", user)
  }
}
