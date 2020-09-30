import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { ToastController, AlertController } from '@ionic/angular';
import { ConfigService } from '../../services/config-service';
import { HerramientaService } from '../../services/herramienta.service';
import { FileTransferObject, FileTransfer, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { UploadService } from '../../services/upload.service';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-herramienta',
  templateUrl: './herramienta.page.html',
  styleUrls: ['./herramienta.page.scss'],
})
export class HerramientaPage implements OnInit {

  public listAllObras: any
  public idProductDelete: any
  public showListTool = false
  public showSpinner = false
  public showForm = false
  public showForm2=false
  public showFormTools = false
  public formHerramienta : FormGroup
  public id:AbstractControl
  public name:AbstractControl
  public price:AbstractControl
  public Smessage = false;
  public message: String;
 
  constructor(
    private servicesHerramienta: HerramientaService,
    private formBuilder: FormBuilder,
    public uploadS: UploadService, private fileChooser: FileChooser, 
    private transfer: FileTransfer, private file: File,
    public toastController: ToastController,
    public config: ConfigService,
    public alertController: AlertController) 
  {
   this.formHerramienta = this.formBuilder.group({
    name: [''],
    price: [''],
    id: ['']
  })
  this.id = this.formHerramienta.controls['id']
  this.name = this.formHerramienta.controls['name']
  this.price = this.formHerramienta.controls['price']
  }

  ngOnInit()
  {
    this.getHerramienta()
  }
  getHerramienta()
  {
    this.showSpinner = true
    this.servicesHerramienta.getHerramienta().subscribe((res:any) => {
      if (res.length > 0) {
        this.showListTool = true
        this.listAllObras = res
        this.showSpinner = false 
       } else {
        this.showSpinner = false
        this.Smessage = true
        this.message = 'No hay herramientas registradas'
       }
    })
  }
  edit(obra: any)
  {
    this.showListTool = false
    this.showForm2 = true
    this.formHerramienta.setValue({ 
      id:obra.idtool,
      name: obra.name,
      price: obra.price
    })
    this.showSpinner = false
  }
  async delete(tool:any) 
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
            this.servicesHerramienta.delete(tool.idtool)
            .subscribe( (res:any) => {
             this.getHerramienta()
             this.showListTool = true
             this.showForm = false
             this.showSpinner = false
          })
          }
        }
      ]
    })
    await alert.present();
  }
  upload(){
    this.fileChooser.open()
    .then(uri => {
      this.file.resolveLocalFilesystemUrl(uri).then((res:any) =>{
        this.upload2(res)
      })
    }).catch(e => {  
      console.log(e)
    });
  }
  async presentAlert(data:any) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: data,
      buttons: ['OK']
    });

    await alert.present();
  }
  upload2(data:any) {
    const fileTransfer: FileTransferObject = this.transfer.create();
    let options: FileUploadOptions = {
       fileKey: 'file',
       fileName: data.name,
       headers: {}
    }
    fileTransfer.upload(data.nativeURL, this.config.getConfig().bussinesServer.url+"/upload", options)
     .then((res) => {
       
       this.formHerramienta.setValue({
         name: res.response,
         price: 'sig_tools'
        })
     }, (err) => {
       console.error(err);
     })
  }
  SendUri(){   
    this.uploadS.SendUri(this.formHerramienta.value).subscribe((res:any)=>{
      this.presentAlert(res.status)
    })
  }
  addTool()
  {
    this.resetForm(this.formHerramienta)
    if(this.showForm===false)
    {
      this.showListTool = false
      this.showForm = true
    }
    else
    {
      this.showListTool = true
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
    if(this.formHerramienta.value.id)
    {
      this.servicesHerramienta.put(this.formHerramienta.value)
       .subscribe( (res:any) => {
        this.getHerramienta()
        this.showListTool = true
        this.showForm = false
        this.showSpinner = false
        })
    }
    else
    {
     this.createTypeObra(this.formHerramienta.value)
    }
  }
  createTypeObra(data:any)
  {
    this.servicesHerramienta.register(data)
          .subscribe( (res:any) => {
          this.getHerramienta()
          this.showListTool = true
          this.showForm = false
          this.showSpinner = false
    })
  }
  onSearch(event:any)
  {
    this.showSpinner = true
    this.showListTool = true
    const data = 
    {
      name : event.target.value
    }
    
    this.servicesHerramienta.searchs(data)
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
