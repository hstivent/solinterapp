import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Plugins, CameraResultType, CameraSource, CameraPhoto, FileAppendResult } from '@capacitor/core';
import { MaterialsService } from '../../services/materials.service';
import { ServiceorderService } from '../../services/serviceorder.service';
import { CategoryService } from '../../services/category.service';
import { PorcentageService } from '../../services/porcentage.service';
import { WorkforceService } from '../../services/workforce.service';
import { HerramientaService } from '../../services/herramienta.service';

import { MaquinariaService } from '../../services/maquinaria.service';
import { FileTransfer, FileUploadOptions, FileTransferObject, FileUploadResult } from '@ionic-native/file-transfer/ngx';
import { ConfigService } from 'src/app/services/config-service';
import { LoadingController } from '@ionic/angular';
import { SectionService } from 'src/app/services/section.service';
@Component({
  selector: 'app-serviceorder',
  templateUrl: './serviceorder.page.html',
  styleUrls: ['./serviceorder.page.scss'],
})
export class ServiceorderPage implements OnInit {
  public arrayImage = [];
  public imageVisita: SafeResourceUrl
  public imageBosq: SafeResourceUrl
  public listMaterials: any
  public listWorkForces: any
  public listTools: any
  public listMachinary: any
  public listCategories: any
  public listCategories2: any
  public listCategories3: any
  public listCategories4: any
  public registerVisitForm: FormGroup
  public selectedWorkFoceForm: FormGroup
  public selectedMachinaryForm: FormGroup
  public selectedToolForm: FormGroup
  public selectedMaterialForm: FormGroup
  public countMaterialForm: FormGroup
  public btnRegister = true
  public btnAsigned = false
  public btnUpdate = false
  public showIm1 = false
  public showIm2 = false
  public loadImage: AbstractControl
  public loadBosq: AbstractControl
  public loadMaterials: AbstractControl
  public loadCategories: AbstractControl
  public visitDescription: AbstractControl
  public clientNam: string;
  public id_visit: number;
  public showSpinner = true;
  public id_section: number;
  public section: any;
  public showFormOrder = true
  public showFormListMaterials = false;
  public showFormCountMaterials = false;
  public listVisits: any
  public listTool: any
  public loading: any
  public listWf: any
  public listmachinarys: any
  public listPorcentages: any
  //  public image: any
  public photo: any
  public photo2: any
  public listAllPhotos: any
  public idCategoria: any
  constructor(public dataService: DataService, private router: Router, 
    private formBuilder: FormBuilder, private sanitizer: DomSanitizer,
    private materialService: MaterialsService, private orderService: ServiceorderService,
    private sectionService: SectionService,
    private categoryName: CategoryService, private serviceOrder: ServiceorderService,
    private transfer: FileTransfer,private config:ConfigService,
    public loadingCtrl: LoadingController,
    private servicePorcentage: PorcentageService, private workForceService: WorkforceService,
    private toolService: HerramientaService, private MachinaryService: MaquinariaService,
  ) {
    this.registerVisitForm = this.formBuilder.group({
      id: [''],
      loadImage: ['',],
      loadBosq: ['',],
    })
    this.selectedMaterialForm = this.formBuilder.group({
      id: [''],
      loadCategories: [''],
      loadMaterials: ['',]

    })
    this.selectedWorkFoceForm = this.formBuilder.group({
      id: [''],
      loadCategories: [''],
      loadMaterials: ['',]

    })
    this.selectedMachinaryForm = this.formBuilder.group({
      id: [''],
      loadCategories: [''],
      loadMaterials: ['',]

    })
    this.selectedToolForm = this.formBuilder.group({
      id: [''],
      loadCategories: [''],
      loadMaterials: ['',]

    })
    this.selectedMaterialForm = this.formBuilder.group({
      id: [''],
      loadCategories: [''],
      loadMaterials: ['',],
      porcentage: ['',]

    })
    this.countMaterialForm = this.formBuilder.group({
      id: [''],
      countMaterial: [''],
      id_section: ['']

    })
    this.loadImage = this.registerVisitForm.controls['loadImage']
    this.loadBosq = this.registerVisitForm.controls['loadBosq']
    this.visitDescription = this.registerVisitForm.controls['visitDescription']
    this.loadCategories = this.selectedMaterialForm.controls['loadCategories']
    this.loadMaterials = this.selectedMaterialForm.controls['loadMaterials']

  }
  
  registerOrder() {
    var r
    for (r = 0; r < this.arrayImage.length; r++) {
      this.arrayImage[r] = this.arrayImage[r].replace("SafeValue must use [property]=binding: data:image/jpeg;base64,", "")
      this.arrayImage[r] = this.arrayImage[r].replace("(see http://g.co/ng/security#xss)", "")
    }

    this.registerVisitForm.value.loadImage = this.arrayImage
    this.registerVisitForm.value.loadBosq = this.photo2.toString()
    this.registerVisitForm.value.id = this.id_section
    this.registerVisitForm.value.loadBosq = this.registerVisitForm.value.loadBosq.replace("SafeValue must use [property]=binding: data:image/jpeg;base64,", "")
    this.registerVisitForm.value.loadBosq = this.registerVisitForm.value.loadBosq.replace("(see http://g.co/ng/security#xss)", "")
    this.orderService.registerOrder(this.registerVisitForm.value)
      .subscribe((res: any) => {
        this.showSpinner = false
      })
  }

  async ngOnInit() {
    this.clientNam = this.dataService.sorder.clientNam
    this.id_visit = this.dataService.sorder.id_visit
    this.id_section = this.dataService.sorder.id_section
    this.getSection();
    this.getCategoriesName();
    this.cantidadMateriales()
    this.cantidadWorkforce()
    this.cantidadTools()
    this.cantidadMachinaries()
  }

  async takePicture() {
    this.loading = await this.loadingCtrl.create();
    this.loading.present();
    const { Camera } = Plugins;
    this.showSpinner = true;
    Camera.getPhoto({
      quality: 50,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera || CameraSource.Photos
    }).then((res: CameraPhoto) => {
      this.uploadImage(res.dataUrl, this.id_section, 2).then((resUp:FileUploadResult)=>{
        if (resUp.responseCode == 200) {
          this.arrayImage.push(resUp.response.replace(/['"]+/g, ''));
          this.showIm1 = true;
          this.loading.dismiss();
        } else {
          console.log(resUp.response);
          this.loading.dismiss();
        }
      });
    });
  }
  async takePicture2() {
    this.loading = await this.loadingCtrl.create();
    this.loading.present();
    const { Camera } = Plugins;
    Camera.getPhoto({
      quality: 50,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera || CameraSource.Photos
    }).then((res: CameraPhoto) => {
      this.uploadImage(res.dataUrl, this.id_section, 1).then((resUp:FileUploadResult)=>{
        if (resUp.responseCode == 200) {
          this.imageBosq = resUp.response.replace(/['"]+/g, '')
          this.showIm2 = true
          this.loading.dismiss();
        } else {
          console.log(resUp.response);
          this.loading.dismiss();
        }
      });
    });
  }

  uploadImage(img, id, type) {
 
    // Destination URL
    let url = this.config.getConfig().bussinesServer.url + '/section/photos';
 
    // File for Upload
    var targetPath = img;
 
    var options: FileUploadOptions = {
      fileKey: 'image',
      chunkedMode: false,
      mimeType: 'multipart/form-data',
      params: { 'id': id, 'type': type }
    };
 
    const fileTransfer: FileTransferObject = this.transfer.create();
 
    // Use the FileTransfer to upload the image
    return fileTransfer.upload(targetPath, url, options);
  }

  getSection(){
    this.sectionService.getSection(this.id_section).subscribe((res: any) =>{
      this.arrayImage = res.photos;
      if (this.arrayImage.length > 0) this.showIm1 = true;
      this.section = res.section;
      if (this.section[0].mockup_picture_uri != null) {
        this.imageBosq = this.section[0].mockup_picture_uri
        this.showIm2 = true;
      }
    })
  }

  getCategoriesName() {
    this.showSpinner = true;
    this.categoryName.getCategories().subscribe((res: any) => {
      this.listCategories = res.filter(category => category.category_type == 1)
      this.listCategories2 = res.filter(category => category.category_type == 4)
      this.listCategories3 = res.filter(category => category.category_type == 2)
      this.listCategories4 = res.filter(category => category.category_type == 3)
    })
    this.showSpinner = false;
  }
  listaMateriales() {
    this.showFormOrder = false
    this.showFormListMaterials = true
    this.showFormCountMaterials = false
    this.idCategoria = this.getCategoriesName()
    this.listaPorcentages()
  }
  listaMaterials(e) {
    this.materialService.getMaterialsId(e.target.value).subscribe((res: any) => {
      this.listMaterials = res
    })
  }
  listaWorkForces(e) {
    this.workForceService.getWorkForceId(e.target.value).subscribe((res: any) => {
      this.listWorkForces = res

    })
  }
  listaTools(e) {
    this.toolService.getToolId(e.target.value).subscribe((res: any) => {
      this.listTools = res;
    })
  }
  listaMachinary(e) {
    this.MachinaryService.getMachinaryId(e.target.value).subscribe((res: any) => {
      this.listmachinarys = res;
    })
  }
  listaPorcentages() {
    this.servicePorcentage.getPorcentageMaterials().subscribe((res: any) => {
      this.listPorcentages = res
    })
  }
  cantidadMateriales() {
    this.countMaterialForm.value.id = this.id_visit
    this.countMaterialForm.value.id_section = this.id_section
    this.materialService.getSelectedMaterials(this.countMaterialForm.value)
      .subscribe((res: any) => {
        this.listVisits = res.visits
        this.showFormOrder = false
        this.showFormListMaterials = false
        this.showFormCountMaterials = true
      })
  }
  cantidadWorkforce() {
    this.countMaterialForm.value.id = this.id_visit
    this.countMaterialForm.value.id_section = this.id_section
    this.workForceService.getSelectedWorkforce(this.countMaterialForm.value.id)
      .subscribe((res: any) => {
        this.listWf = res.visits
        this.showFormOrder = false
        this.showFormListMaterials = false
        this.showFormCountMaterials = true
      })
  }
  cantidadTools() {
    this.countMaterialForm.value.id = this.id_visit
    this.countMaterialForm.value.id_section = this.id_section
    this.toolService.getSelectedTools(this.countMaterialForm.value.id)
      .subscribe((res: any) => {
        this.listTool = res.visits
        this.showFormOrder = false
        this.showFormListMaterials = false
        this.showFormCountMaterials = true
      })
  }
  cantidadMachinaries() {
    this.countMaterialForm.value.id = this.id_visit
    this.countMaterialForm.value.id_section = this.id_section
    this.MachinaryService.getSelectedMachinary(this.countMaterialForm.value.id)
      .subscribe((res: any) => {
        this.listmachinarys = res.visits
        this.showFormOrder = false
        this.showFormListMaterials = false
        this.showFormCountMaterials = true
      })
  }
  registerSelectedMaterials(e) {
    this.showSpinner = true
    const matSelcted = {
      id: this.id_visit,
      id_section: this.id_section,
      loadMaterials: e.target.value
    }
    this.serviceOrder.postmaterialSelected(matSelcted)
      .subscribe((res: any) => {
        this.showSpinner = false
        if (res.status) {
          this.cantidadMateriales();
        }
      })
  }
  registerSelectedWorkforce(e) {
    this.showSpinner = true
    const workSelcted = {
      id: this.id_visit,
      id_section: this.id_section,
      loadWorkforces: e.target.value
    }
    this.serviceOrder.postworkforceSelected(workSelcted)
      .subscribe((res: any) => {
        this.showSpinner = false
        if (res.status) {
          this.cantidadWorkforce();
        }
      })
  }
  registerSelectedTools(e) {
    this.showSpinner = true
    const toolSelcted = {
      id: this.id_visit,
      id_section: this.id_section,
      loadTools: e.target.value
    }
    this.serviceOrder.posttoolSelected(toolSelcted)
      .subscribe((res: any) => {
        this.showSpinner = false
        if (res.status) {
          this.cantidadTools();
        }
      })
  }
  registerSelectedMachinaries(e) {
    this.showSpinner = true
    const machSelcted = {
      id: this.id_visit,
      id_section: this.id_section,
      loadMachinarys: e.target.value
    }
    this.serviceOrder.postmachinarySelected(machSelcted)
      .subscribe((res: any) => {
        this.showSpinner = false
        if (res.status) {
          this.cantidadMachinaries();
        }
      })
  }
  registerCountMaterials() {
    this.showSpinner = true
    for (let i = 0; i < this.listVisits.length; i++) {
      const e = this.listVisits[i];
      const material = {
        count: (document.getElementById("countMaterial" + e.id_material) as HTMLInputElement).value,
        id_material: e.id_material,
        cod_visit: e.cod_visit,
        id_section: this.id_section
      }
      this.serviceOrder.putmaterialSelectedCount(material).subscribe();
    }
  }
  registerCountWorkf() {
    this.showSpinner = true
    for (let i = 0; i < this.listWf.length; i++) {
      const e = this.listWf[i];    
       const workforce = {
        count: (document.getElementById("countWork"+e.id_material) as HTMLInputElement).value,
        id_Workf: e.id_material,
        cod_visit: e.cod_visit,
        id_section: this.id_section
      }
      this.serviceOrder.putworkForceSelectedCount(workforce).subscribe(); 
    }    
  }
  registerCountTools() {
    this.showSpinner = true
    for (let i = 0; i < this.listTool.length; i++) {
      const e = this.listTool[i];    
       const tool = {
        count: (document.getElementById("countTool" + e.id_material) as HTMLInputElement).value,
        id_tool: e.id_material,
        cod_visit: e.cod_visit,
        id_section: this.id_section
      }
      this.serviceOrder.putToolSelectedCount(tool)
        .subscribe((res: any) => {
        }) 
    }
    
  }
  registerCountMachinary() {
    this.showSpinner = true
    for (let i = 0; i < this.listmachinarys.length; i++) {
      const e = this.listmachinarys[i];
     
       const machinary = {
        count: (document.getElementById("countMachinary" + e.id_material) as HTMLInputElement).value,
        id_machinary: e.id_material,
        cod_visit: e.cod_visit,
        id_section: this.id_section
      }
      this.serviceOrder.putMachinarySelectedCount(machinary)
        .subscribe((res: any) => {
        }) 
    }
    
  }

}
