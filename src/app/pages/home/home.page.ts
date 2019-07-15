import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  buttonClicked: boolean = false;
  email: string;
  password: string;
  isHidden: boolean = true; 

  constructor(private navCtrl: NavController, private userService: UserService) {}

  navigateToForgotPassword() 
  {
    this.navCtrl.navigateForward("forgot-password");
  }

  navigateToExplore() 
  {
    if(this.userService.login(this.email, this.password))
    { 
      this.navCtrl.navigateForward("explore");
    }

    else
    {
      this.isHidden = false;
      //write error message in code
      //use an angular directive to hide it
        //ngHide
      //change the variable to unhide it
    }

  }

  navigateToRegistration()
  {
    this.navCtrl.navigateForward("registration");
  }
  
  

  
}
