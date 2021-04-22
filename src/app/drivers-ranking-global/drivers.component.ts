import { Component, OnInit } from '@angular/core';
import { race } from 'rxjs';
import { Race } from '../races-per-circuit/race';

import { Driver } from './driver';
import { DriverService } from './driver.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
})
export class DriversComponent implements OnInit {
  drivers: Driver [];
  races: Race[];
  constructor(private driverService:DriverService) { }

  ngOnInit(): void {
    this.driverService.getDrivers().subscribe(
      drivers => this.drivers = drivers

      
    );
    this.driverService.getRaces().subscribe(
      races => this.races = races
    );
  }

}
