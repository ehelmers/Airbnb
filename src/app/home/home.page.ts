import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  buttonClicked: boolean = false;

  constructor(private navCtrl: NavController) {}

  isButtonClicked() 
  {
    this.buttonClicked = true;
    console.log(this.buttonClicked); 
  }

  navigateToExplore() 
  {
    this.navCtrl.navigateForward("explore");
  }
}
