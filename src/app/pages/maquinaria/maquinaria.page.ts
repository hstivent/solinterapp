import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { ToastController, AlertController } from '@ionic/angular';
import { ConfigService } from '../../services/config-service';
import { MaquinariaService } from '../../services/maquinaria.service';
import { FileTransferObject, FileTransfer, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { WorkforceService } from '../../services/workforce.service';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-maquinaria',
  templateUrl: './maquinaria.page.html',
  styleUrls: ['./maquinaria.page.scss'],
})
export class MaquinariaPage implements OnInit {

  public listAllObras: any
  public idProductDelete: any
  public showListObras = false
  public showSpinner = false
  public showForm = false
  public showForm2 = false
  public formMaquinaria : FormGroup
  public id:AbstractControl
  public name:AbstractControl
  public price:AbstractControl
  public Smessage = false;
  public message: String;

  constructor(
    private servicesMaquinaria: MaquinariaService,
    private formBuilder: FormBuilder,
    public toastController: ToastController,
    private uploadS: UploadService, private fileChooser: FileChooser, 
    private config:ConfigService, private transfer: FileTransfer, 
    private file: File,private workforceS:WorkforceService,
    public alertController: AlertController) 
  {

   this.formMaquinaria = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required ],
      price: ['', Validators.required ]
    })

    this.name = this.formMaquinaria.controls['name']
    this.id = this.formMaquinaria.controls['id']
    this.price = this.formMaquinaria.controls['price']
  }

  ngOnInit()
  {
    this.getMaquinaria()
  }
  getMaquinaria()
  {
    this.showSpinner = true
    this.servicesMaquinaria.get().subscribe((res:any) => {
      if (res.length > 0) {
      this.showListObras = true
      this.listAllObras = res
      this.showSpinner = false 
     } else {
      this.showSpinner = false
      this.Smessage = true
      this.message = 'No hay maquinaria registrada'
     }
    })
  }
  edit(obra: any)
  {
    this.showListObras = false
    this.showForm2 = true
    this.formMaquinaria.setValue({ 
      id:obra.idmachinary,
      name:obra.name,
      price: obra.price,
    })
    this.showSpinner = false
  }
  async delete(_id: any)
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
            this.servicesMaquinaria.delete(this.idProductDelete)
            .subscribe( (res:any) => {
             this.getMaquinaria()
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
    this.resetForm(this.formMaquinaria)
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
    if(this.formMaquinaria.value.id)
    {
      this.servicesMaquinaria.put(this.formMaquinaria.value)
       .subscribe( (res:any) => {
        this.getMaquinaria()
        this.showListObras = true
        this.showForm2 = false
        this.showSpinner = false
        })
    }
    else
    {
     this.createTypeObra(this.formMaquinaria.value)
    }
  }
  createTypeObra(data:any)
  {
    this.servicesMaquinaria.register(data)
          .subscribe( (res:any) => {
          this.getMaquinaria()
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
    
    this.servicesMaquinaria.searchs(data)
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
  upload(){
    this.fileChooser.open()
    .then(uri => {
      this.file.resolveLocalFilesystemUrl(uri).then((res:any) =>{
        this.upload2(res)
      })
    }).catch(e => {  
      console.error(e)
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
       
       this.formMaquinaria.setValue({
         id: '',
         name: res.response,
         price: 'sig_workforce'
        })
     }, (err) => {
       console.error(err);
     })
  }
  SendUri(){   
    this.uploadS.SendUri(this.formMaquinaria.value).subscribe((res:any)=>{
      this.presentAlert(res.status)
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
