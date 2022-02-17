import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { TurismComponent } from './Pages/turism/turism.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { NoutatiComponent } from './Pages/noutati/noutati.component';
import { MagazinFructeComponent } from './Pages/magazin-fructe/magazin-fructe.component';
import { FructeArahideComponent } from './Components/fructe-arahide/fructe-arahide.component';
import { FructeCapsuniComponent } from './Components/fructe-capsuni/fructe-capsuni.component';
import { FructeZmeuraComponent } from './Components/fructe-zmeura/fructe-zmeura.component';
import { FructeHomeComponent } from './Components/fructe-home/fructe-home.component';
import { TurismDescriereAnaComponent } from './Components/turism-descriere-ana/turism-descriere-ana.component';
import { TurismDescriereVanatorComponent } from './Components/turism-descriere-vanator/turism-descriere-vanator.component';
import { DonatieComponent } from './Pages/donatie/donatie.component';
import { JoburiComponent } from './Pages/joburi/joburi.component';
import { FructeComponent } from './Components/fructe/fructe.component';
import { TurismAtractiiComponent } from './Components/turism-atractii/turism-atractii.component';
import { TurismCazareComponent } from './Components/turism-cazare/turism-cazare.component';
import { JobCOOComponent } from './Components/job-coo/job-coo.component';
import { JobSMMComponent } from './Components/job-smm/job-smm.component';
import { ModalClickDirective } from './Components/turism-atractii/modal-click.directive';
import { FormContactComponent } from './Components/form-contact/form-contact.component';
import { ContactFormComponent } from './Components/contact-form/contact-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TurismComponent,
    ContactComponent,
    NoutatiComponent,
    MagazinFructeComponent,
    FructeArahideComponent,
    FructeCapsuniComponent,
    FructeZmeuraComponent,
    FructeHomeComponent,
    TurismDescriereAnaComponent,
    TurismDescriereVanatorComponent,
    DonatieComponent,
    JoburiComponent,
    FructeComponent,
    TurismAtractiiComponent,
    TurismCazareComponent,
    JobCOOComponent,
    JobSMMComponent,
    ModalClickDirective,
    FormContactComponent,
    ContactFormComponent,
  ],

  imports: [
    BrowserModule,
    MatIconModule,
    AppRoutingModule,
    NgImageSliderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
