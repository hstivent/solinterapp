import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { UserModalComponent } from '../user-modal/user-modal.component'
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { ConfigService } from 'src/app/services/config-service';
@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  public showSpinner=false;
  public showListUsers=false
  public listAllUsers:any


  
  constructor(
    private alertController: AlertController, 
    private userservices:  UserService,
    public toastController: ToastController,
    public Modalctrl: ModalController,
    public config: ConfigService,
    private router: Router) { 
     
   }

  

  ngOnInit() {
    this.listUsers()
  }
  async addUsers(type, user) {
    let modal = await this.Modalctrl.create({
      component: UserModalComponent,
      componentProps: {
        'user' : user,
        "type": type
      }
    });
    modal.onDidDismiss().then((res) => {
      if (res.data !== null) {
        this.listUsers();
      }
    });
    
    return await modal.present();
  }
  listUsers()
  {
    this.showSpinner = true
    this.userservices.getUsers().subscribe((res:any) => {
      this.listAllUsers = res
      this.showListUsers = true
      this.showSpinner = false
   })

  }
  async presentAlertConfirm(user:any) {
    const alert = await this.alertController.create({
      header: 'Seguro?',
      message: '¿Desea eliminar este usario?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Si',
          handler: () => {
            this.deleteUser(user)
          }
        }
      ]
    });

    await alert.present();
  }
  async deleteUser(user:any){
    this.showSpinner = true
    const alert = await this.alertController.create({
      header: 'Hubo un error',
      message: 'Algo pasó!',
    });
    await this.userservices.deleteUser(user).subscribe( async (res:any) =>{
      if (res.status) {
        this.showSpinner = false
        this.listUsers()
      } else {
        await alert.present();
      }
    })
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
    this.showListUsers = true
    const data = {
      name : event.target.value
    }

    this.userservices.searchsUsers(data).subscribe( (res:any) => {
        if(res.status == true)
        {
          if(res.users.length > 0)
          {
            this.listAllUsers = res.users
            this.showSpinner = false
          }
          else
          {
            this.listAllUsers = [];
            this.presentToast(this.config.getMessage().searchsUser.message)
            this.showSpinner = false
          }
        }
      })
     
  }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
  pageClient(){

    this.router.navigate(['/clients'])
  }
  pageMaterial(){
    this.router.navigate(['/materials'])
    
  }
  pageUser(){
    this.router.navigate(['/user'])
    
  }
  pageVisit(){
    this.router.navigate(['/schedulesvisits'])
    
  }
}
