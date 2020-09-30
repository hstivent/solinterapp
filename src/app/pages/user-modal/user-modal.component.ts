import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { NavParams, ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {

  public UserID:AbstractControl
  public UserName:AbstractControl
  public UserAddress:AbstractControl
  public UserPhone:AbstractControl
  public UserEmail:AbstractControl
  public UserTypeName:AbstractControl
  public userNam:AbstractControl
  public UserPassword:AbstractControl
  public type;
  public message;
  public disableE;
  public disableU;
  public disableD;
  public showSpinner=false;
  public btnRegister = false
  public listAllUserType:any
  public btnUpdate = false
  public registerUserForm : FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private userservices:  UserService,
    public modalCtrl: ModalController,
    public alertController: AlertController,
    public NavParams: NavParams) {
    this.registerUserForm = this.formBuilder.group({
      idUser: [''],
      UserID: ['', Validators.compose( [Validators.required] )],
      UserName: ['', Validators.compose( [Validators.required] )],
      UserAddress: ['', Validators.compose( [Validators.required] )],
      UserPhone: ['', Validators.compose( [Validators.required] )],
      UserEmail: ['', Validators.compose( [Validators.required] )],
      UserTypeName: ['', Validators.required ],
      userNam: ['', Validators.compose( [Validators.required] )],
      password: ['' ]
    })
    this.UserID = this.registerUserForm.controls['UserID']
    this.UserName = this.registerUserForm.controls['UserName']
    this.UserAddress = this.registerUserForm.controls['UserAddress']
    this.UserPhone = this.registerUserForm.controls['UserPhone']
    this.UserEmail = this.registerUserForm.controls['UserEmail']
    this.UserTypeName = this.registerUserForm.controls['UserTypeName']
    this.userNam = this.registerUserForm.controls['userNam']
    this.UserPassword = this.registerUserForm.controls['password']
   }
   

  ngOnInit() {
    this.type = this.NavParams.get("type")
    this.listUserType(this.type, this.NavParams.get("user"))
  }
  listUserType(type, user)
  {
    if (type==2) {
      this.registerUserForm.setValue({ 
        idUser:user.iduser,
        UserID:user.user_id,
        UserName:user.user_name,
        UserAddress:user.user_address,
        UserPhone:user.user_phone,
        UserEmail:user.user_email,
        userNam:user.username,
        UserTypeName:user.user_usertype,
        password:user.password
      })
    }
    this.userservices.getUserType().subscribe((res:any) => {
      this.listAllUserType = res
    })
  }
  async updateUser() {    
    this.userservices.putUser(this.registerUserForm.value).subscribe( (res:any) => {
      if (res.status) {
        this.dismiss()
        this.showSpinner = false
      } else {
        this.presentAlert('Contacte con su administrador.')
      }
    })
  }
  async registerUser() {
    await this.userservices.registerUsers(this.registerUserForm.value).subscribe( (res:any) => {
      if (res.status == 200) {
        this.dismiss()
        this.showSpinner = false
      } else {
        this.presentAlert('Contacte con su administrador.')
      }
    })
  }
  async valid() {
    this.showSpinner = true
    
    if(this.registerUserForm.value.idUser == '') {
      this.userservices.validUser(this.registerUserForm.value.UserEmail,this.registerUserForm.value.UserID,this.registerUserForm.value.userNam).subscribe((res:any) =>{
        if (res.length >= 1) {
          this.presentAlert(res.message);
        } else {
          this.registerUser();
        }
      })
    } else {
      this.updateUser()
    }
  }
  async presentAlert(message) {
    const alert = await this.alertController.create({
      header: 'Algo está mal!',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
    this.showSpinner = false;
  }
  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
