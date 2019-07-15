import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user/user.service';
import { Property } from '../../models/property.model';
import { PropertyService } from '../../services/property/property.service';


@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {

  public currentUser: User; 
  public currentProperty: Property;
  public properties: Property[];


  constructor(private navCtrl: NavController, private userService: UserService, private propertyService: PropertyService ) {}
  //put servicers in the constructor 

  navigateToBio()
  {
    this.navCtrl.navigateForward("bio");
  }

  //returns to login page if the user is not logged in 

  ngOnInit() {
    this.currentUser = this.userService.currentUser;
    if(!this.currentUser){
      this.navCtrl.navigateForward('/login');
    }
    this.properties = this.propertyService.getAllProperties();
  }



  getProperty(id:number):Property {
    return this.propertyService.getAllProperties().filter(property => property.id == id)[0];
  }
  
  navigateToPropertyDetails() 
  {
    this.navCtrl.navigateForward("propertydetails");
  }
}
