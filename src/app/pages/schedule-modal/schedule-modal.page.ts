import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from "@ionic/angular";
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { SchedulesvisitsService } from '../../services/schedulesvisits.service';
import { Storage } from '@ionic/storage';
import { Socket } from "ngx-socket-io";


@Component({
  selector: 'app-schedule-modal',
  templateUrl: './schedule-modal.page.html',
  styleUrls: ['./schedule-modal.page.scss'],
})
export class ScheduleModalPage implements OnInit {

  public showListSchedules = false
  public listAllSchedules:any
  public registerScheduleForm: FormGroup
  public idSchedule: AbstractControl
  public ScheduleDate: AbstractControl
  public ScheduleTime: AbstractControl
  public titulo: String
  public typeuser: any
  public showSpiner = false;

  constructor(public modalCtrl: ModalController,
    public Scheduleservices: SchedulesvisitsService,
    public formBuilder: FormBuilder,
    public Sc: Socket,
    public storage: Storage,
    public NavParams: NavParams) {

    
      this.registerScheduleForm = this.formBuilder.group({
        idSchedule: [''],
        ScheduleTime: [''],
        ScheduleDate: ['']
      })
      this.idSchedule = this.registerScheduleForm.controls['idSchedule']
      this.ScheduleDate = this.registerScheduleForm.controls['ScheduleDate']
      this.ScheduleTime = this.registerScheduleForm.controls['ScheduleTime']
   }

  ngOnInit() {
    this.getVisit();
  }

  updateSchedule(){
    this.showSpiner = true
    this.Scheduleservices.putSchedulesPen(this.registerScheduleForm.value).subscribe((res:any) => {
      if (res.status) {
        this.getVisit()
        this.Sc.emit("schedule", res.status)
      } else {
        alert("Error al actualizar")
      }
    })
  }

  getVisit(){
    this.showSpiner = true
    this.storage.get('user').then((res) => {
      this.typeuser = res.user_usertype
      const user = {
        iduser: res.iduser,
        typeUser: res.user_usertype
      }
    if (this.typeuser == 3) {
      this.Scheduleservices.getSchedulePen(user).subscribe((res: any) => {
        this.listAllSchedules = res
        if (res.length < 1) {
          this.showSpiner = false
          this.dismiss()
        } else {
          this.showListSchedules = true
          this.showSpiner = false
        }
      })
    }
    });
  }


  orders(item){
    this.titulo = item.client_name
    this.registerScheduleForm.setValue({
      idSchedule:item.schedule_id,
      ScheduleDate:item.datevisit,
      ScheduleTime:item.timevisit
    })
    this.showListSchedules = !this.showListSchedules
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
