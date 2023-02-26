import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor( public menuCtrl: MenuController) { }

  ngOnInit() {}

  toggleMenu(){
    this.menuCtrl.toggle();

  }

  openFirst() {
    this.menuCtrl.enable(true, 'first');
    this.menuCtrl.open('first');
  }
  openEnd() {
    this.menuCtrl.open('end');
  }
  openCustom() {
    this.menuCtrl.enable(true, 'custom');
    this.menuCtrl.open('custom');
  }

}
