import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DriversComponent } from './drivers-ranking-global/drivers.component';

import { DriversRacesComponent } from './drivers-all-Races/driversRaces.component';
import { RacesPerCircuitComponent } from './races-per-circuit/races.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    DriversComponent,
    DriversRacesComponent,
    RacesPerCircuitComponent,
    HeaderComponent,
    FooterComponent,
    
   
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
 
    AppRoutingModule

  ],
  providers: [],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

