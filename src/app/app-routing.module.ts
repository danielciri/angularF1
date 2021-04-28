import { NgModule } from '@angular/core';
import { DriversComponent } from './drivers-ranking-global/drivers.component';
import { RouterModule, Routes } from '@angular/router';
import { DriversRacesComponent } from './drivers-all-Races/driversRaces.component';


const appRoutes: Routes=[
 
  {path:'',component: DriversComponent , pathMatch:'full'},
  {path:'ranking',component: DriversComponent},
  {path:'ranking/:name',component: DriversComponent},
  {path:'driver/:id',component: DriversRacesComponent},
  
  
]
@NgModule({
 
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
