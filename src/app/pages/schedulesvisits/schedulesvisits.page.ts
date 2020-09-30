import { Component, OnInit } from "@angular/core";
import { SchedulesvisitsService } from "../../services/schedulesvisits.service";
import {
  FormBuilder,
  FormGroup,
  AbstractControl,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { Socket } from "ngx-socket-io";
import { DataService } from "../../services/data.service";
import { ClientService } from "../../services/client.service";
import { UserService } from "../../services/user.service";
import { ModalController } from "@ionic/angular";
import { ScheduleModalPage } from "../schedule-modal/schedule-modal.page";
import { SafeResourceUrl } from "@angular/platform-browser";
import { Storage } from "@ionic/storage";
import { Observable } from "rxjs";
import { LocalNotifications } from "@ionic-native/local-notifications/ngx";
import { ModalSectionComponent } from "../modal-section/modal-section.component";

@Component({
  selector: "app-schedulesvisits",
  templateUrl: "./schedulesvisits.page.html",
  styleUrls: ["./schedulesvisits.page.scss"]
})
export class SchedulesvisitsPage implements OnInit {
  public imageVisita: SafeResourceUrl;
  public showSpiner = false;
  public showListSchedules = false;
  public showListScheduleso = false;
  public showListClients = false;
  public showFormSchedule = false;
  public showFormSchedule2 = false;
  public showFormScheduleo = false;
  public listAllSchedules: any;
  public listPenSchedules: any;
  public listAllScheduleso: any;
  public listAllUsers: any;
  public user: any;
  public listAllClients: any;
  public registerScheduleForm: FormGroup;
  public registerScheduleForm2: FormGroup;
  public asignedScheduleForm: FormGroup;
  public btnRegister = false;
  public btnAsigned = false;
  public btnUpdate = false;
  public typeuser: any;
  show = false;

  public ClientName: AbstractControl;
  public ScheduleDate: AbstractControl;
  public ScheduleTime: AbstractControl;
  public DescSchedule: AbstractControl;
  public UserName: AbstractControl;
  public ClientName2: AbstractControl;
  public type: any;
  public ScheduleDate2: AbstractControl;
  public ScheduleTime2: AbstractControl;
  public DescSchedule2: AbstractControl;
  public UserName2: AbstractControl;
  constructor(
    public Scheduleservices: SchedulesvisitsService,
    public Modalctrl: ModalController,
    public Sc: Socket,
    public formBuilder: FormBuilder,
    public router: Router,
    public dataService: DataService,
    public storage: Storage,
    public localNotifications: LocalNotifications,
    public clientService: ClientService,
    public userService: UserService
  ) {
    this.newschedule().subscribe((schedule: any) => {
      this.storage.get("user").then(res => {
        if (res.user_usertype == 3) {
          if (res.iduser == schedule.UserName2) {
            this.getClientNot(schedule);
            const user = {
              iduser: schedule.UserName2,
              typeUser: schedule.type
            };
            this.Scheduleservices.getSchedulesPen(user).subscribe(
              (res: any) => {
                this.listPenSchedules = res;
              }
            );
          }
        }
      });
    });
    this.observe().subscribe((schedule: any) => {
      this.listSchedules();
    });
  }
  ngOnInit() {
    this.listClients();
    this.listUsers();
    this.listSchedules();
  }
  async openModal() {
    const modal = await this.Modalctrl.create({
      component: ScheduleModalPage,
      componentProps: {
        visits: this.listPenSchedules
      }
    });
    return await modal.present();
  }
  getClientNot(client: any) {
    this.clientService.getClient(client.ClientName2).subscribe((res: any) => {
      const data = { client, res };
      this.newNotification(data);
    });
  }
  newNotification(data: any) {
    for (let i = 0; i < data.res.length; i++) {
      const e = data.res[i];
      this.localNotifications.schedule({
        id: 1,
        title: "nueva visita a " + e.client_name + "",
        text: data.client.DescSchedule2,
        sound: "file://sound.mp3",
        data: data
      });
    }
  }

  listSchedules() {
    this.storage.get("user").then(res => {
      if (res != null) {
        this.typeuser = res.user_usertype;
        this.user = { iduser: res.iduser, typeUser: res.user_usertype };
      } else {
        this.typeuser = this.dataService.storage.user_usertype;
        this.user = {
          iduser: this.dataService.storage.iduser,
          typeUser: this.dataService.storage.role
        };
      }
      this.showSpiner = true;
      this.Scheduleservices.getSchedules(this.user).subscribe((res: any) => {
        this.listAllSchedules = res;
        this.showListSchedules = true;
        this.showSpiner = false;
      });
      if (this.typeuser == 3) {
        this.Scheduleservices.getSchedulesPen(this.user).subscribe(
          (res: any) => {
            this.listPenSchedules = res;
          }
        );
      }
    });
  }

  listClients() {
    this.clientService.getClients().subscribe((res: any) => {
      this.showListSchedules = true;
      this.listAllClients = res;
    });
  }
  listUsers() {
    this.userService.getUsers().subscribe((res: any) => {
      this.showListSchedules = true;
      this.listAllUsers = res;
    });
  }
  newschedule() {
    let observable = new Observable(observer => {
      this.Sc.on("newschedule", (schedule: any) => {
        observer.next(schedule);
      });
    });
    return observable;
  }
  observe() {
    let observable = new Observable(observer => {
      this.Sc.on("schedule", (schedule: any) => {
        observer.next(schedule);
      });
    });
    return observable;
  }
  async addSchedule() {
    this.storage.get("user").then(res => {
      this.typeuser = res.user_usertype;
    });
    let modal = await this.Modalctrl.create({
      component: ModalSectionComponent,
      componentProps: {
        typeuser: this.typeuser,
        type: 1
      }
    });
    modal.onDidDismiss().then(res => {
      if (res.data !== null) {
      }
    });

    return await modal.present();
  }
  resetForm(form: any) {
    if (form) {
      form.reset();
    }
  }
  editSchedule(schedule: any) {
    this.showSpiner = true;
    this.showListSchedules = false;
    this.showFormSchedule = true;
    this.registerScheduleForm.setValue({
      idSchedule: schedule.schedule_id,
      ClientName: schedule.client_clientid,
      DescSchedule: schedule.descrioption,
      //   UserName:schedule.user_userid,
      ScheduleDate: schedule.datevisit,
      ScheduleTime: schedule.timevisit
    });

    this.showSpiner = false;
    this.btnUpdate = true;
    this.btnRegister = false;
    this.btnAsigned = false;
  }
  pageClient() {
    this.router.navigate(["/clients"]);
  }
  pageMaterial() {
    this.router.navigate(["/materials"]);
  }
  pageUser() {
    this.router.navigate(["/user"]);
  }
  pageVisit() {
    this.router.navigate(["/schedulesvisits"]);
  }
  orderes(data: any) {
    this.showSpiner = true;
    this.dataService.schedules = {
      client: data.idclient,
      clientName: data.client_name,
      id: data.schedule_id
    };
    this.showListScheduleso = true;
    this.showSpiner = false;
    this.router.navigate(["/visits"]);
  }

  logout() {
    this.storage.remove("user").then(res => {
      this.router.navigate(["/login"]);
    });
  }
}
