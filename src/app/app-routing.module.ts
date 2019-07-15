import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'explore', loadChildren: './pages/explore/explore.module#ExplorePageModule' },
  { path: 'registration', loadChildren: './pages/registration/registration.module#RegistrationPageModule' },
  { path: 'bio', loadChildren: './pages/bio/bio.module#BioPageModule' },
  { path: 'forgot-password', loadChildren: './pages/forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  { path: 'propertydetails', loadChildren: './pages/propertydetails/propertydetails.module#PropertydetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
