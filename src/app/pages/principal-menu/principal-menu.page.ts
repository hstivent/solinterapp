import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-principal-menu',
  templateUrl: './principal-menu.page.html',
  styleUrls: ['./principal-menu.page.scss'],
})
export class PrincipalMenuPage implements OnInit {

  constructor(private menu: MenuController) { }

  
  ngOnInit() {
  }

}
