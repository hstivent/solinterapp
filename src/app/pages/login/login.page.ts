import { Component, OnInit, ViewChild } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ConfigService } from '../../services/config-service';
import { LoginService } from '../../services/login.service';
import { MessageService } from '../../services/message.service';
import { Storage } from "@ionic/storage";
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage implements OnInit{


  loginComponentText: any
  loginForm : FormGroup
  user:any
  public dateNow = new Date()

  constructor( private formBuilder: FormBuilder,
    private config:ConfigService,
    private messageService: MessageService,
    private storage: Storage,
    private loginService: LoginService,
    private data: DataService,
    private router: Router,
    private route: ActivatedRoute,
    public loadingController: LoadingController,
    public navCtrl: NavController)
    {
     this.loginForm = this.formBuilder.group({
      username: ['', Validators.required ],
      password: ['', Validators.required ],
    })


  }

  ngOnInit()
  {
    this.loginComponentText = this.getTextLogin()
  }

  loginUser()
  {
    if(this.loginForm.value)
    {
      this.presentLoading()
      this.loginService.loginUser(this.loginForm.value).subscribe((res:any) => {
        if(res.status==true){
          this.storage.remove('user')
          this.storage.set('user', res.userInfo);
          this.resetForm(this.loginForm)
          this.pushClientPage(res.userInfo)
        }
        else{
          this.resetForm(this.loginForm)
          return this.messageService.presentAlert("Iniciando sesión","",res.message)
        }
      })
    }
  }

  pushClientPage(usuario){
    if(usuario!=null){
      this.data.storage = {
        "name":usuario.user_name,
        "address":usuario.user_address,
        "id": usuario.iduser,
        "phone":usuario.user_phone,
        "email":usuario.user_email,
        "estado":usuario.user_state,
        "role":usuario.user_usertype
    }
      switch(usuario.user_usertype){
        case this.config.getConfig().typerolvalidate.admin:
          this.router.navigate(['/schedulesvisits'])
        break;
        case this.config.getConfig().typerolvalidate.secretaria:
          this.router.navigate(['/schedulesvisits'])
        break;
        case this.config.getConfig().typerolvalidate.trabajador:
          this.router.navigate(['/schedulesvisits'])
        break;
      }
    }
    else{
      console.log("No exite")
    }
  }
  goHomePage()
  {
    this.router.navigate(['/'])
  }
  goAboutPage()
  {
    this.router.navigate(['/about'])
  }
  pageHelp()
  {
    this.router.navigate(['/help'])
  }
  resetForm(form: any)
  {
    if(form)
    {
      form.reset()
    }
  }
  clearForm()
  {
    this.resetForm(this.loginForm)
  }
  getTextLogin()
  {
   return this.config.getConfig().loginComponent
  }
  async presentLoading()
  {
    const loading = await this.loadingController.create({
      message: '',
      duration: 1000
    });
    return await loading.present();
  }
  recoveryPassword()
  {
    this.messageService.presentAlertPrompt()
  }
  createAccount()
  {
    this.navCtrl.navigateForward('registeruser')
  }
}