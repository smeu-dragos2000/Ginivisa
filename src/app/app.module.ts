import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
import { JobsComponent } from './Components/jobs/jobs.component';
import { FructeComponent } from './Components/fructe/fructe.component';
import { TurismAtractiiComponent } from './Components/turism-atractii/turism-atractii.component';
import { TurismCazareComponent } from './Components/turism-cazare/turism-cazare.component';

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
    JobsComponent,
    FructeComponent,
    TurismAtractiiComponent,
    TurismCazareComponent
  ],

  imports: [
    BrowserModule,
    MatIconModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
