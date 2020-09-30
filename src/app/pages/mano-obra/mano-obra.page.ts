import { Component, OnInit } from '@angular/core';
import { WorkforceService } from '../../services/workforce.service';
import { CategoryService } from '../../services/category.service';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { FileTransferObject, FileTransfer, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { AlertController } from '@ionic/angular';
import { UploadService } from '../../services/upload.service';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { ConfigService } from '../../services/config-service';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-mano-obra',
  templateUrl: './mano-obra.page.html',
  styleUrls: ['./mano-obra.page.scss'],
})
export class ManoObraPage implements OnInit {

  public showSpinner = false
  public showListWork = false
  public showFormmano = false
  public listAllWork: any
  public listAllCategories: any
  public registerManoObForm: FormGroup
  public btnRegister = false
  public btnUpdate = false
  public showForm2 = false
  public Smessage = false;
  public message: String;

  public id: AbstractControl
  public name: AbstractControl
  public price: AbstractControl
  public categoryID: AbstractControl

  constructor(public alertController: AlertController,
    private uploadS: UploadService, private fileChooser: FileChooser,
    private config: ConfigService, private transfer: FileTransfer,
    private file: File, private workforceS: WorkforceService,
    private categoryservices: CategoryService,
    private formBuilder: FormBuilder) {
    {
      this.registerManoObForm = this.formBuilder.group({
        id: [''],
        name: ['', Validators.required ],
        price: ['', Validators.required ]
      })
      this.name = this.registerManoObForm.controls['name']
      this.id = this.registerManoObForm.controls['id']
      this.price = this.registerManoObForm.controls['price']
    }
  }
  ngOnInit() {
    this.getWorkforce()
    this.getCategory()
  }

  addWorkforce() {
    this.resetForm(this.registerManoObForm)
    this.btnRegister = true
    if (this.showFormmano === false) {
      this.showListWork = false
      this.showFormmano = true
      this.btnUpdate = false
    }
    else {
      this.showListWork = true
      this.showFormmano = false
    }
  }

  getCategory() {
    const type = 2
    this.categoryservices.getCategoriesM(type).subscribe((res: any) => {
      this.listAllCategories = res
    })
  }

  resetForm(form: any) {
    if (form) {
      form.reset()
    }
  }

  getWorkforce() {
    this.showSpinner = true
    this.workforceS.getWorkforce().subscribe((res: any) => {
     if (res.length > 0) {
       this.showListWork = true
       this.listAllWork = res
       this.showSpinner = false  
     } else {
      this.showSpinner = false
      this.Smessage = true
      this.message = 'No hay mano de obra registrada'
     }
    })
  }

  edit(obra: any)
  {
    this.showListWork = false
    this.showForm2 = true
    this.registerManoObForm.setValue({ 
      id:obra.idworkf,
      name:obra.name,
      price: obra.price
    })
    this.showSpinner = false
  }

  async confirm(wf:any) 
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
            this.showSpinner = true
            this.workforceS.delete(wf).subscribe( (res:any) => {
              if (res.status) {
                this.getWorkforce()
                this.showListWork = true
                this.showSpinner = false
              }
          })
          }
        }
      ]
    })
    await alert.present();
  }

  upload() {
    this.fileChooser.open()
      .then(uri => {
        this.file.resolveLocalFilesystemUrl(uri).then((res: any) => {
          this.upload2(res)
        })
      }).catch(e => {
        console.log(e)
      });
  }
  async presentAlert(data: any) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: data,
      buttons: ['OK']
    });

    await alert.present();
  }
  upload2(data: any) {
    const fileTransfer: FileTransferObject = this.transfer.create();
    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: data.name,
      headers: {}
    }
    fileTransfer.upload(data.nativeURL, this.config.getConfig().bussinesServer.url + "/upload", options)
      .then((res) => {

        this.registerManoObForm.setValue({
          id: '',
          name: res.response,
          price: 'sig_workforce'
        })
      }, (err) => {
        console.error(err);
      })
  }
  SendUri() {
    this.uploadS.SendUri(this.registerManoObForm.value).subscribe((res: any) => {
      this.presentAlert(res.status)
    })
  }

  register() {
    this.showSpinner = true
    if (this.registerManoObForm.value.id) {
      this.workforceS.put(this.registerManoObForm.value).subscribe((res:any) =>{
        if (res.status)
        {
          this.getWorkforce()
          this.showListWork = true
          this.showForm2 = false
          this.showSpinner = false
        }
      })
    }
    else {
      this.createWork(this.registerManoObForm.value)
    }
  }

  createWork(data: any) {
    this.workforceS.register(data).subscribe((res:any) =>{
          this.getWorkforce()
          this.showListWork = true
          this.showFormmano = false
          this.showSpinner = false
    })
  }

}
