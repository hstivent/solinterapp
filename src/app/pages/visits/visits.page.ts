import { Component, OnInit } from "@angular/core";
import { SchedulesvisitsService } from "src/app/services/schedulesvisits.service";
import { DataService } from "src/app/services/data.service";
import { ModalController } from "@ionic/angular";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { ClientService } from "src/app/services/client.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-visits",
  templateUrl: "./visits.page.html",
  styleUrls: ["./visits.page.scss"]
})
export class VisitsPage implements OnInit {
  public showSpiner = false;
  public listAllSchedules: any;
  public listPenSchedules: any;
  public listAllScheduleso: any;
  public showListScheduleso = false;
  public clientName: string;
  public listAllUsers: any;
  public query: any;
  public typeuser: any;
  public showListSchedules = false;

  constructor(
    public storage: Storage,
    public Scheduleservices: SchedulesvisitsService,
    public Modalctrl: ModalController,
    public router: Router,
    private dataServiceSchedule: DataService,
    public clientService: ClientService,
    public userService: UserService
  ) {}
  ngOnInit() {
    this.listSchedules();
    this.clientName = this.dataServiceSchedule.schedules.clientName;
  }

  listSchedules() {
    this.storage.get("user").then(res => {
      if (res != null) {
        this.typeuser = res.user_usertype;
        this.query = {
          iduser: res.iduser,
          typeUser: res.user_usertype,
          clientid: this.dataServiceSchedule.schedules.client
        };
      } else {
        this.typeuser = this.dataServiceSchedule.storage.user_usertype;
        this.query = {
          iduser: this.dataServiceSchedule.storage.iduser,
          typeUser: this.dataServiceSchedule.storage.role,
          clientid: this.dataServiceSchedule.schedules.client
        };
      }
      this.showSpiner = true;
      this.Scheduleservices.getSchedulesClient(this.query).subscribe(
        (res: any) => {
          this.listAllSchedules = res;
          this.showListSchedules = true;
          this.showSpiner = false;
        }
      );
    });
  }

  orderes(data: any) {
    this.showSpiner = true;
    this.dataServiceSchedule.schedules = {
      client: data.idclient,
      clientName: data.client_name,
      id: data.schedule_id
    };
    this.showSpiner = false;
    this.router.navigate(["/listschedule"]);
  }
}
