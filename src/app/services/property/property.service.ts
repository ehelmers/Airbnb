import { Injectable } from '@angular/core';
import { Property } from '../../models/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor() { }

  getAllProperties(): Property[]{
    return [
      new Property(
        1, 
        500, 
        4, 
        "Lisbon"
      ), 
      new Property(
        2, 
        450, 
        3, 
        "Algarve"
      )
    ]
    //returns array of properties
  }

}
