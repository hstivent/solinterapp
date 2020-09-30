import { Component, OnInit } from '@angular/core';
import { TipoObraService } from '../../services/tipo-obra.service';
import { FormBuilder, FormsModule, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { ToastController, AlertController } from '@ionic/angular';
import { ConfigService } from '../../services/config-service';


@Component({
  selector: 'app-tipo-obra',
  templateUrl: './tipo-obra.page.html',
  styleUrls: ['./tipo-obra.page.scss'],
})
export class TipoObraPage implements OnInit {

  public listAllObras: any
  public idProductDelete: any
  public showListObras = false
  public showSpinner = false
  public showFormObra = false
  public formObra : FormGroup
  public name:AbstractControl

  constructor(
    private servicesTipoObra: TipoObraService,
    private formBuilder: FormBuilder,
    public toastController: ToastController,
    public config: ConfigService,
    public alertController: AlertController) 
  {
   this.formObra = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required ]
    })
    this.name = this.formObra.controls['name']
  }

  ngOnInit()
  {
    this.getTyPeObras()
  }

  getTyPeObras()
  {
    this.showSpinner = true
    this.servicesTipoObra.getTypeObras().subscribe((res:any) => {
      this.showListObras = true
      this.listAllObras = res
      this.showSpinner = false
    })
  }

  edit(obra: any)
  {
    this.showListObras = false
    this.showFormObra = true
    this.formObra.setValue({ 
      id:obra.idtipo,
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
            this.servicesTipoObra.deleteTypeObra(this.idProductDelete)
            .subscribe( (res:any) => {
             this.getTyPeObras()
             this.showListObras = true
             this.showFormObra = false
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
    this.resetForm(this.formObra)
    if(this.showFormObra===false)
    {
      this.showListObras = false
      this.showFormObra = true
    }
    else
    {
      this.showListObras = true
      this.showFormObra = false
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
    if(this.formObra.value.id)
    {
      this.servicesTipoObra.putTypeObra(this.formObra.value)
       .subscribe( (res:any) => {
        this.getTyPeObras()
        this.showListObras = true
        this.showFormObra = false
        this.showSpinner = false
        })
    }
    else
    {
     this.createTypeObra(this.formObra.value)
    }
  }

  async createTypeObra(data:any)
  {
    await this.servicesTipoObra.registerTypeObras(data)
          .subscribe( (res:any) => {
          this.getTyPeObras()
          this.showListObras = true
          this.showFormObra = false
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
    
    this.servicesTipoObra.searchsTypeObras(data).subscribe( (res:any) => {
       if(res.length > 0)
       {
         this.listAllObras = res
         this.showSpinner = false
       }
       else
       {
        this.showSpinner = false
        this.presentToast("Tipo de obra no existe!")
       }
    })
  }

  async presentToast(message:any)
  {
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
