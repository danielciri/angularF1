import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from '../models/driver';


import { DriverRacesService } from './driverRaces.services';


@Component({
  selector: 'app-drivers-races',
  templateUrl: './driversRaces.component.html',
  styleUrls: ['./driverRaces.component.css']
  
})
export class DriversRacesComponent implements OnInit {
  driver: Driver;
  private urlEndPoint:string = 'http://localhost:8080/api/driver/'

  _id:string;
  sub;
  constructor(private driverService:DriverRacesService, private activatedroute:ActivatedRoute) {  }

  ngOnInit(): void {
    this.sub=this.activatedroute.params.subscribe(params => { 
      
       this._id = params['id'];
       let url :string = this.urlEndPoint + this._id;
       console.log(this._id);
       
       this.driverService.getDriver(url).subscribe(
        driver => this.driver = driver
      
  
      );
  
   });

    

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
