import { Component, OnInit } from '@angular/core';
import { Race } from '../models/race';


import { RaceService } from './race.service';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',

})
export class RacesPerCircuitComponent implements OnInit {
  races: Race[];
  constructor(private raceService: RaceService) {
    
   }

  ngOnInit(): void {
    this.raceService.getRaces().subscribe(
      races => this.races = races
    );
  }

}
