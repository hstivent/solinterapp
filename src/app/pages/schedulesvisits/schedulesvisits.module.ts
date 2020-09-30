import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { configuration } from "../../configuration/configuration";
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { IonicModule } from '@ionic/angular';
import { SchedulesvisitsPage } from './schedulesvisits.page';
const config: SocketIoConfig = { url: configuration.bussinesServer.url , options: {} };

const routes: Routes = [
  {
    path: '',
    component: SchedulesvisitsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocketIoModule.forRoot(config),
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SchedulesvisitsPage]
})
export class SchedulesvisitsPageModule {}
