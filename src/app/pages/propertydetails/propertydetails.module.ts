import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PropertydetailsPage } from './propertydetails.page';

const routes: Routes = [
  {
    path: '',
    component: PropertydetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PropertydetailsPage]
})
export class PropertydetailsPageModule {}
