import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormBuilder } from '@angular/forms';
import { ConfigService } from '../../services/config-service';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { VentasService } from '../../services/ventas-service';
import { PuntoventaService } from '../../services/puntoventa.service';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

 public nombre: String
 public nombrecompleto: String
 public identificacion: String
 public nombrePuntoVe: String
 public telefono: String
 public nmPtv: String
 public nombrePuntoVenta: String
 public idpuntoventa: Number
 public totalVenta: any
 public totaAdicional: any
 public totalVentaFinal:any
 public listAllProducts: any
 public totalVentaProductosPunto: any
 public dateNow = new Date()
 public showListVentasByDay: any
 public showListVentasByPuntoByDay: any
 public showSpinner = false
 public showListPtv = false
 public showUserPoint = false
 public showDetalle = false
 public showBack = true
 public showViewVentasByPuntoByDay = false
 public listAllPtvs: any
 public listDataUserPoint: any
 public getVentaDetalle: any

constructor(
  private formBuilder: FormBuilder,
  private data: DataService,
  private ventasService:VentasService,
  private usuarioService: UsuariosService,
  private puntoVentaService: PuntoventaService,
  private config:ConfigService,
  private router: Router,
  public toastController: ToastController,
  public loadingController: LoadingController) { }

 ngOnInit()
 {


 }


}
