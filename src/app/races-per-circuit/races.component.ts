import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Race } from '../models/race';


import { RaceService } from './race.service';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',

})
export class RacesPerCircuitComponent implements OnInit {
  races: Race[];
  constructor(private raceService: RaceService,private activatedRoute: ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this.raceService.getRaces().subscribe(
      races => this.races = races
    );
  }

}
