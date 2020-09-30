import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrincipalMenuPage } from './principal-menu.page';

const routes: Routes = [
  {
    path: '',
    component: PrincipalMenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrincipalMenuPage]
})
export class PrincipalMenuPageModule {}
