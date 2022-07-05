import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Pages/home/home.component';
import { MagazinFructeComponent } from './Pages/magazin-fructe/magazin-fructe.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { TurismComponent } from './Pages/turism/turism.component';
import { NoutatiComponent } from './Pages/noutati/noutati.component';
import { JoburiComponent } from './Pages/joburi/joburi.component';
import { DonatieComponent } from './Pages/donatie/donatie.component';
import { BrainHubComponent } from './Pages/brain-hub/brain-hub.component';

import { HashLocationStrategy, PathLocationStrategy, LocationStrategy } from '@angular/common';



const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'magazin-fructe', component: MagazinFructeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'turism', component: TurismComponent},
  {path: 'brain-hub', component: BrainHubComponent},
  {path: 'noutati', component: NoutatiComponent},
  {path: 'joburi', component: JoburiComponent},
  {path: 'donatie', component: DonatieComponent},
  {path: '**', component: HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy }]
  // providers: [{provide: LocationStrategy, useClass: PathLocationStrategy }]
})
export class AppRoutingModule { }
