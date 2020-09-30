import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { SectionService } from '../../services/section.service';
import { SchedulesvisitsService } from 'src/app/services/schedulesvisits.service';
import { Socket } from 'ngx-socket-io';
import { Storage } from '@ionic/storage';
import { ClientService } from 'src/app/services/client.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-modal-section',
  templateUrl: './modal-section.component.html',
  styleUrls: ['./modal-section.component.scss']
})
export class ModalSectionComponent implements OnInit {
  public listAllClients: any
  public listAllUsers: any
  public idsc: String
  public showSpiner = false;
  public registerScheduleForm: FormGroup
  public registerScheduleForm2: FormGroup
  public typeuser: any
  public ClientName: AbstractControl
  public ScheduleDate: AbstractControl
  public ScheduleTime: AbstractControl
  public DescSchedule: AbstractControl
  public UserName: AbstractControl
  public ClientName2: AbstractControl
  public type: any
  public ScheduleDate2: AbstractControl
  public ScheduleTime2: AbstractControl
  public DescSchedule2: AbstractControl
  public UserName2: AbstractControl

  constructor(public modalCtrl: ModalController,
    public Sc: Socket,
    public storage: Storage,
    public clientS: ClientService,
    public userS: UserService,
    public Scheduleservices: SchedulesvisitsService,
    public formBuilder: FormBuilder,
    public sectionService: SectionService,
    public navParams: NavParams) {
            //schedule form user
      this.registerScheduleForm = this.formBuilder.group({
        idSchedule: [''],
        ClientName: ['', Validators.compose([Validators.required])],
        UserName: ['',],
        ScheduleDate: ['',],
        type: ['',],
        ScheduleTime: ['',],
        DescSchedule: ['', Validators.compose([Validators.required])]
      })
      this.ClientName = this.registerScheduleForm.controls['ClientName']
      this.UserName = this.registerScheduleForm.controls['UserName']
      this.ScheduleDate = this.registerScheduleForm.controls['ScheduleDate']
      this.ScheduleTime = this.registerScheduleForm.controls['ScheduleTime']
      this.DescSchedule = this.registerScheduleForm.controls['DescSchedule']

      //schedule form admin
  
      this.registerScheduleForm2 = this.formBuilder.group({
        type: ['',],
        UserName2: ['',],
        ClientName2: [''],
        DescSchedule2: ['']
  
      })
      this.ClientName2 = this.registerScheduleForm2.controls['ClientName2']
      this.UserName2 = this.registerScheduleForm2.controls['UserName2']
      this.DescSchedule2 = this.registerScheduleForm2.controls['DescSchedule2']
  }

  ngOnInit() {
    this.idsc = this.navParams.get('id')
    this.typeuser = this.navParams.get('typeuser')
    this.type = this.navParams.get('type')
    this.gets()
  }
  gets(){
    this.clientS.getClients().subscribe((res:any) =>{
      this.listAllClients = res
    })
    this.userS.getUsers().subscribe((res:any) =>{
      this.listAllUsers = res
    })
  }
  registerSchedule(type) {
    this.showSpiner = true
    if (type == 1) {
      if (this.registerScheduleForm.value.idSchedule) {
        this.Scheduleservices.putSchedule(this.registerScheduleForm.value)
          .subscribe((res: any) => {
            this.dismiss();            
          })
      }
      else {
        this.storage.get('user').then((res) => {
          this.registerScheduleForm.value.UserName=res.iduser
          this.registerScheduleForm.value.type=res.user_usertype
          this.createSchedule(this.registerScheduleForm.value)
        })
      }
    } else {
      this.showSpiner = true
      if (this.registerScheduleForm2.value.idSchedule) {
        this.Scheduleservices.putSchedule(this.registerScheduleForm2.value)
          .subscribe((res: any) => {
            this.showSpiner = false
            this.dismiss();
          })
      }
      else {        
        this.registerScheduleForm2.value.type=type
        this.createSchedule(this.registerScheduleForm2.value)
      }
    }
  }
  createSchedule(data: any) {
    this.Scheduleservices.registerSchedules(data).subscribe((res: any) => {
      this.showSpiner = false
      this.Sc.emit("newschedule", data)
      this.dismiss();
    })
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }

}
