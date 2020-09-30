import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Camera, CameraOriginal } from '@ionic-native/camera';
import { IonicModule } from '@ionic/angular';

import { ServiceorderPage } from './serviceorder.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceorderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ServiceorderPage],
  providers: [
 //   CameraOriginal
  ]
})
export class ServiceorderPageModule {}
