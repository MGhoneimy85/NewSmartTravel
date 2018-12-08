import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PackageDetailsPageComponent } from './package-details-page/package-details-page.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'package-details',
    component: PackageDetailsPageComponent
  },
  {
    path: '**', // default (if the requested URL doesn't match any path)
    redirectTo: 'home',
  }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
