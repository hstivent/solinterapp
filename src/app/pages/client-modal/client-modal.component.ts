import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { ClientService } from 'src/app/services/client.service';
import { TypeclientService } from 'src/app/services/typeclient.service';
import { ConfigService } from 'src/app/services/config-service';

@Component({
  selector: 'app-client-modal',
  templateUrl: './client-modal.component.html',
  styleUrls: ['./client-modal.component.scss']
})
export class ClientModalComponent implements OnInit {

  public registerClientForm : FormGroup
  public nit: AbstractControl
  public name: AbstractControl
  public address: AbstractControl
  public phone: AbstractControl
  public email: AbstractControl
  public contact: AbstractControl
  public showSpiner = false;
  public typeclient: AbstractControl
  public imageclient: AbstractControl
  constructor(
    private formBuilder: FormBuilder,
    public Modalctrl: ModalController,
    private clientService: ClientService,
    private typeclientService: TypeclientService,
    public alertController: AlertController,
    public toastController: ToastController,
    public config: ConfigService) { 
    this.registerClientForm = this.formBuilder.group({
      id: [''],
      nit: ['', Validators.required ],
      name: ['', Validators.required ],
      address: ['', Validators.required ],
      phone: ['', Validators.required ],
      email: ['', Validators.required ],
      contact: ['', Validators.required ]
    })
    this.nit = this.registerClientForm.controls['nit']
    this.name = this.registerClientForm.controls['name']
    this.address = this.registerClientForm.controls['address']
    this.phone = this.registerClientForm.controls['phone']
    this.email = this.registerClientForm.controls['email']
    this.contact = this.registerClientForm.controls['contact']
  }

  ngOnInit() {
  }

  registerClient()
  {
    this.showSpiner = true
    if(this.registerClientForm.value.id){
      this.clientService.putClient(this.registerClientForm.value).subscribe( (res:any) => {
      })    
    }
    else {
      this.createClient(this.registerClientForm.value)
    }
  }

  async createClient(data:any)
  {
    this.clientService.registerClient(this.registerClientForm.value).subscribe( (res:any) => {
      this.showSpiner = false
    }) 
  }
}
