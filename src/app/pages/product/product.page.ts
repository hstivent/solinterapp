import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ToastController, AlertController } from '@ionic/angular';
import { ConfigService } from '../../services/config-service';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  public showSpinner = false
  public showListProduct = false
  public btnRegister = false
  public btnUpdate = false
  public showFormProduct = false
  public listAllProducts: any
  public registerProductForm : FormGroup
  public idProductDelete: any

  public name:AbstractControl
  public price:AbstractControl
  public category:AbstractControl
 
  constructor(
    private productService: ProductService,
    public toastController: ToastController,
    public config: ConfigService,
    private formBuilder: FormBuilder,
    public alertController: AlertController) 
    {

     }

  ngOnInit() {
  }


}
