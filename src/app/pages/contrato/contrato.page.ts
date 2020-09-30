import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { ToastController, AlertController } from '@ionic/angular';
import { ConfigService } from '../../services/config-service';
import { TipocontratoService } from '../../services/tipocontrato.service';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.page.html',
  styleUrls: ['./contrato.page.scss'],
})
export class ContratoPage implements OnInit {

  public listAllObras: any
  public idProductDelete: any
  public showListObras = false
  public showSpinner = false
  public showForm = false
  public formTipoContrato : FormGroup
  public name:AbstractControl

  constructor(
    private servicesTipoContrato: TipocontratoService,
    private formBuilder: FormBuilder,
    public toastController: ToastController,
    public config: ConfigService,
    public alertController: AlertController) 
  {
   this.formTipoContrato = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required ]
    })
    this.name = this.formTipoContrato.controls['name']
  }

  ngOnInit()
  {
    this.getTyPeContrato()
  }

  getTyPeContrato()
  {
    this.showSpinner = true
    this.servicesTipoContrato.get().subscribe((res:any) => {
      this.showListObras = true
      this.listAllObras = res
      this.showSpinner = false
    })
  }

  edit(obra: any)
  {
    this.showListObras = false
    this.showForm = true
    this.formTipoContrato.setValue({ 
      id:obra.id,
      name: obra.nombre
    })
    this.showSpinner = false
  }

  async  delete(_id: any)
  {
    if(_id)
    {
     this.idProductDelete = _id
     this.confirm()
    }
}

  async confirm() 
  {
    const alert = await this.alertController.create({
      header: 'Está seguro de eliminar?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'primary',
          handler: (blah) => {}
        }, {
          text: 'Si',
          handler: () => 
          {
            this.servicesTipoContrato.delete(this.idProductDelete)
            .subscribe( (res:any) => {
             this.getTyPeContrato()
             this.showListObras = true
             this.showForm = false
             this.showSpinner = false
          })
          }
        }
      ]
    })
    await alert.present();
  }


  addTipoObra()
  {
    this.resetForm(this.formTipoContrato)
    if(this.showForm===false)
    {
      this.showListObras = false
      this.showForm = true
    }
    else
    {
      this.showListObras = true
      this.showForm = false
    }
  }

  resetForm(form: any)
  {
    if(form)
    {
      form.reset()
    }
  }

  register()
  {
   this.showSpinner = true
    if(this.formTipoContrato.value.id)
    {
      this.servicesTipoContrato.put(this.formTipoContrato.value)
       .subscribe( (res:any) => {
        this.getTyPeContrato()
        this.showListObras = true
        this.showForm = false
        this.showSpinner = false
        })
    }
    else
    {
     this.createTypeObra(this.formTipoContrato.value)
    }
  }

  async createTypeObra(data:any)
  {
    await this.servicesTipoContrato.register(data)
          .subscribe( (res:any) => {
          this.getTyPeContrato()
          this.showListObras = true
          this.showForm = false
          this.showSpinner = false
    })
  }

  onSearch(event:any)
  {
    this.showSpinner = true
    this.showListObras = true
    const data = 
    {
      name : event.target.value
    }
    
    this.servicesTipoContrato.searchs(data)
    .subscribe( (res:any) => {
       if(res.length > 0)
       {
         this.listAllObras = res
         this.showSpinner = false
       }
       else
       {
        this.showSpinner = false
        this.presentToast("Tipo de contrato no existe!")
       }
    })
  }

  async presentToast(message:any) {
    const toast = await this.toastController.create({
      message: message,
      position: 'top',
      duration: 2000,
      animated: true,
      color: "primary"
    })
    toast.present()
  }

}
