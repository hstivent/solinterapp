import { Component, OnInit } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { MaterialsService } from '../../services/materials.service';
import { CategoryService } from '../../services/category.service';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { ConfigService } from '../../services/config-service';
import { UploadService } from '../../services/upload.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-materials',
  templateUrl: './materials.page.html',
  styleUrls: ['./materials.page.scss'],
})
export class MaterialsPage implements OnInit {

  public showSpinner = false
  public showListMaterials = false
  public showFormMaterial = false
  public showForm2 = false
  public listAllMaterials: any
  public listAllCategories: any
  public registerMaterialForm: FormGroup
  public btnRegister = false
  public btnUpdate = false
  public Smessage = false;
  public message: String;

  public id: AbstractControl
  public name: AbstractControl
  public price: AbstractControl



  constructor(public alertController: AlertController, private uploadS: UploadService, private fileChooser: FileChooser,
    private config: ConfigService, private transfer: FileTransfer, private file: File,
    private materialservices: MaterialsService, private categoryservices: CategoryService,
    private formBuilder: FormBuilder) {
    {
      this.registerMaterialForm = this.formBuilder.group({
        id: [''],
        name: ['', Validators.required],
        price: ['', Validators.required]
      })
      this.name = this.registerMaterialForm.controls['name']
      this.id = this.registerMaterialForm.controls['id']
      this.price = this.registerMaterialForm.controls['price']
    }
  }

  ngOnInit() {
    this.listMaterial()
    this.getCategory()
  }
  listMaterial() {
    this.showSpinner = true
    this.materialservices.getMaterials().subscribe((res: any) => {
      if (res.length > 0) {
        this.showListMaterials = true
        this.listAllMaterials = res
        this.showSpinner = false
      } else {
        this.showSpinner = false
        this.Smessage = true
        this.message = 'No hay materiales registrados'
      }
    })
  }
  registerMaterial() {
    this.showSpinner = true
    if (this.registerMaterialForm.value.id) {
      this.materialservices.putMaterial(this.registerMaterialForm.value)
        .subscribe((res: any) => {
          this.listMaterial()
          this.showListMaterials = true
          this.showFormMaterial = false
          this.showSpinner = false
        })
    }
    else {
      this.createMaterial(this.registerMaterialForm.value)
    }
  }
  getCategory() {
    const type = 1
    this.categoryservices.getCategoriesM(type).subscribe((res: any) => {
      this.listAllCategories = res
    })
  }
  createMaterial(data: any) {
    this.materialservices.registerMaterials(data)
      .subscribe((res: any) => {
        this.listMaterial()

        this.showListMaterials = true
        this.showFormMaterial = false
        this.showSpinner = false
      })
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
        this.registerMaterialForm.setValue({
          id: '',
          name: res.response,
          price: 'sig_materials'
        })
      }, (err) => {
        console.error(err);
      })
  }
  SendUri() {
    this.uploadS.SendUri(this.registerMaterialForm.value).subscribe((res: any) => {
      this.presentAlert(res.status)
    })
  }
  addMaterial() {
    this.resetForm(this.registerMaterialForm)
    this.btnRegister = true
    if (this.showFormMaterial === false) {
      this.showListMaterials = false
      this.showFormMaterial = true
      this.btnUpdate = false
    }
    else {
      this.showListMaterials = true
      this.showFormMaterial = false
    }
  }
  resetForm(form: any) {
    if (form) {
      form.reset()
    }
  }
  editMaterial(material: any) {
    this.showSpinner = true
    this.showListMaterials = false
    this.showForm2 = true
    this.registerMaterialForm.setValue({
      id: material.idmaterial,
      name: material.name,
      price: material.price
    })
    this.showSpinner = false
    this.btnUpdate = true
    this.btnRegister = false
  }
  async confirm(material) {
    const alert = await this.alertController.create({
      header: 'Está seguro de eliminar?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'primary',
          handler: (blah) => { }
        }, {
          text: 'Si',
          handler: () => {
            this.delete(material)
          }
        }
      ]
    })
    await alert.present();
  }
  delete(material: any) {
    this.showSpinner = true
    this.materialservices.deleteMaterial(material).subscribe((res: any) => {
      this.listMaterial()
      if (res.status) {
        this.showSpinner = false
      }
    })
  }
  onSearch(event: any) {
    this.showSpinner = true
    this.showFormMaterial = false
    this.showListMaterials = true



    const data = {
      name: event.target.value
    }
    this.materialservices.searchsMaterials(data)
      .subscribe((res: any) => {
        if (res.status == true) {
          if (res.materials.length > 0) {
            this.listAllMaterials = res.materials
            this.showSpinner = false
          }
          else {
            /*this.presentToast(this.config.getMessage().searchsClient.message)
            this.showSpinner = false*/
          }
        }
      })

  }
}
