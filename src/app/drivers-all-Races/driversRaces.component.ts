import { Component, OnInit } from '@angular/core';
import { Race } from '../races-per-circuit/race';
import { Driver } from './driver';
import { DriverRacesService } from './driverRaces.services';


@Component({
  selector: 'app-drivers-races',
  templateUrl: './driversRaces.component.html',
  styleUrls: ['./driversRaces.component.css']
})
export class DriversRacesComponent implements OnInit {
  driver: Driver;
  races: Race [];
  constructor(private driverService:DriverRacesService) {  }

  ngOnInit(): void {
   

    this.driverService.getDriver().subscribe(
      driver => this.driver = driver
    

    );

  }

}
