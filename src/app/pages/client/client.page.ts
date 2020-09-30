import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { TypeclientService } from '../../services/typeclient.service';
import { AlertController, ToastController, ModalController } from '@ionic/angular';
import { ConfigService } from '../../services/config-service';
import { ClientModalComponent } from '../client-modal/client-modal.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {

  public showSpinner = false
  public showListClient = false
  public showFormClient = false
  public showFormClientV=false
  public btnRegister = false
  public btnUpdate = false
  public showUpdateImg = false
  public listAllClient : any
  public listTypeClient : any
  public listClient:any
  public showClient=false
 

  constructor(
    public Modalctrl: ModalController,
    private clientService: ClientService,
    private typeclientService: TypeclientService,
    public alertController: AlertController,
    public toastController: ToastController,
    public config: ConfigService
  ){}

  ngOnInit()
  {
    this.getClients()
    this.getTypeClients()
  }

  getTypeClients()
  {
    this.typeclientService.getTypeClients().subscribe((res:any) => {
      this.listTypeClient = res
    })
  }

  getClients()
  {
    this.showSpinner = true
     this.clientService.getClients().subscribe((res:any) => {
        this.showListClient = true
        this.listAllClient =res
        this.showSpinner = false
     })
  }

  async addClient()
  {
    let modal = await this.Modalctrl.create({
      component: ClientModalComponent,
      componentProps: {
      }
    });
    modal.onDidDismiss().then((res) => {
      if (res.data !== null) {
        this.getClients();
      }
    });
    
    return await modal.present();
  }

  async editClient(client:any)
  {
    let modal = await this.Modalctrl.create({
      component: ClientModalComponent,
      componentProps: {
        id: client.idclient,
        nit: client.client_nit,
        name: client.client_name,
        address: client.client_address,
        phone: client.client_phone,
        email: client.client_email,
        contact: client.client_contact,
        typeclient: client.clientype_clientypeid,
        imageclient:client.client_image,
        imagetype:client.imagetype
      }
    });
    modal.onDidDismiss().then((res) => {
      if (res.data !== null) {
        this.getClients();
      }
    });
    
    return await modal.present();
  }

  verClient(client:any)
  {
    this.showSpinner = true
    this.showUpdateImg = false
    this.showListClient = false
    this.showClient = true
    this.listClient =  client 
    this.showSpinner = false
    this.btnUpdate = false
    this.btnRegister = false
    
  }

  resetForm(form: any)
  {
    if(form)
    {
      form.reset()
    }
  }

  onSearch(event:any)
  {
    this.showSpinner = true
    this.showFormClient = false
    this.showListClient = true
    const data = {
      name : event.target.value
    }
    this.clientService.searchsClients(data)
    .subscribe( (res:any) => {
        if(res.status == true)
        {
          if(res.clients.length > 0)
          {
            this.listAllClient = res.clients
            this.showSpinner = false
          }
          else
          {
            this.presentToast(this.config.getMessage().searchsClient.message)
            this.showSpinner = false
          }
        }
      })
  }

  async deleteClient(id: string) 
  {
    const alert = await this.alertController.create({
      header: 'Está seguro de eliminar?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {}
        }, {
          text: 'Si',
          handler: () => 
          {
            this.clientService.deleteClient(id)
            .subscribe( (res:any) => {
              this.getClients()
            })
          }
        }
      ]
    })
    await alert.present();
  }

  async presentToast(message:any) {
    const toast = await this.toastController.create({
      message: message,
      position: 'top',
      duration: 2000,
      animated: true,
      color: "danger"
    })
    toast.present()
  }
}
