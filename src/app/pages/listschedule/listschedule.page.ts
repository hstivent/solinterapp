import { Component, OnInit } from "@angular/core";
import { SchedulesvisitsService } from "../../services/schedulesvisits.service";
import { Router } from "@angular/router";
import { DataService } from "../../services/data.service";
import { Storage } from "@ionic/storage";
import { ModalController } from "@ionic/angular";
import { SectionModalComponent } from "../section-modal/section-modal.component";

@Component({
  selector: "app-listschedule",
  templateUrl: "./listschedule.page.html",
  styleUrls: ["./listschedule.page.scss"]
})
export class ListschedulePage implements OnInit {
  public showSpinner = false;
  public typeuser: String;
  public showListScheduleso = false;
  public showFormSchedule = false;
  public showFormScheduleo = false;
  public showClient = false;
  public showClientImg = false;
  public listshowClient: any;
  public listAllSchedules: any;
  public listAllScheduleso: any;
  public clientName: string;

  constructor(
    private Scheduleservices: SchedulesvisitsService,
    private dataServiceSchedule: DataService,
    public Modalctrl: ModalController,
    public storage: Storage,
    private router: Router
  ) {}

  ngOnInit() {
    this.getOrders();
    this.clientName = this.dataServiceSchedule.schedules.clientName;
  }

  getOrders() {
    this.showSpinner = true;
    this.Scheduleservices.getSection(
      this.dataServiceSchedule.schedules.id
    ).subscribe((res: any) => {
      this.showListScheduleso = true;
      this.listAllScheduleso = res;
      this.showSpinner = false;
    });
  }
  serviceorder(data: any) {
    this.showSpinner = true;
    this.dataServiceSchedule.sorder = {
      client: this.dataServiceSchedule.schedules.client,
      clientNam: this.dataServiceSchedule.schedules.clientName,
      id_visit: data.id_schedule,
      id_section: data.idsection
    };
    this.showSpinner = false;
    this.router.navigate(["/serviceorder"]);
  }

  async addSection() {
    this.storage.get("user").then(res => {
      this.typeuser = res.user_usertype;
    });
    let modal = await this.Modalctrl.create({
      component: SectionModalComponent,
      componentProps: {
        id: this.dataServiceSchedule.schedules.id,
        typeuser: this.typeuser,
        type: 1
      }
    });
    modal.onDidDismiss().then(res => {
      if (res.data !== null) {
        this.getOrders();
      }
    });

    return await modal.present();
  }
}
