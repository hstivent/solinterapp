import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from "@ionic/angular";
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-schedu-modal',
  templateUrl: './schedu-modal.component.html',
  styleUrls: ['./schedu-modal.component.scss']
})
export class ScheduModalComponent implements OnInit {

  public showListSchedules = false
  public listAllSchedules:any
  public registerScheduleForm: FormGroup
  public ScheduleDate: AbstractControl
  public ScheduleTime: AbstractControl
  public titulo: String

  constructor(public modalCtrl: ModalController,
    public formBuilder: FormBuilder, public NavParams: NavParams) {

    
    this.ScheduleDate = this.registerScheduleForm.controls['ScheduleDate']
    this.ScheduleTime = this.registerScheduleForm.controls['ScheduleTime']
    this.registerScheduleForm = this.formBuilder.group({
      idSchedule: [''],
      ScheduleTime: [''],
      DescSchedule: ['']
    })
   }

  ngOnInit() {
    this.listAllSchedules = this.NavParams.get("visits")
    this.showListSchedules = true
  }


  orders(){
    
    this.showListSchedules == !this.showListSchedules
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
