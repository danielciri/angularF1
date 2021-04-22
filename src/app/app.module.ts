import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DriversComponent } from './drivers-ranking-global/drivers.component';
import { RacesComponent } from './races-per-circuit/races.component';
import { RouterModule, Routes } from '@angular/router';
import { DriverService } from './drivers-ranking-global/driver.service';
import { DriversRacesComponent } from './drivers-all-Races/driversRaces.component';
const routes: Routes=[
  {path:'',redirectTo:'/drivers', pathMatch:'full'},
  {path:'drivers',component: DriversComponent},
  {path:'drivers',component: DriversRacesComponent},
  {path:'drivers/races',component: DriversRacesComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    DriversComponent,
    RacesComponent,
    DriversRacesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DriverService],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
