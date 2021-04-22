import { Component, OnInit } from '@angular/core';
import { Driver } from '../drivers-ranking-global/driver';
import { Race } from './race';
import { RaceService } from './race.service';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',

})
export class RacesComponent implements OnInit {
  drivers: Driver [];

  constructor(private raceService: RaceService) { }

  ngOnInit(): void {
    this.raceService.getRaces().subscribe(
      drivers => this.drivers = drivers
      
      
    );
  }

}
