import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';

@Injectable({
  providedIn: 'root'
})
export class MaterialsService implements OnInit{

 
  readonly URL_API = this.config.getConfig().bussinesServer.url

  constructor(private http: HttpClient, private config:ConfigService)
  {
  }
  ngOnInit()
  {
  }
  getMaterials()
  {
    return this.http.get(this.URL_API+"/materials")
  }
  getSelectedMaterials(idvisit: any)
  {
    return this.http.get(this.URL_API+`/materials/selected/${idvisit.id}?id_section=${idvisit.id_section}`)
  }

  getMaterialsId(idCategory: string)
  {
    return this.http.get(this.URL_API+`/materials/${idCategory}`)
  }

  registerMaterials(nameMaterial: any)
  {
    return this.http.post(this.URL_API+"/materials/create", nameMaterial)
  }

  putMaterial(material: any){
    return this.http.put(this.URL_API + `/materials/${material._id}`, material)
  }

  deleteMaterial(material: any){
    return this.http.delete(this.URL_API + `/materials/${material}`)
  }

  searchsMaterials(material: any)
  {
    return this.http.post(this.URL_API+"/materials/search", material)
  }

  upload(file:any){
    return this.http.post(this.URL_API+"/upload", file)
  }
  
}
