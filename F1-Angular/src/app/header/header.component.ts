import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Race } from '../models/race';

import { RaceService } from '../races-per-circuit/race.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],



})
export class HeaderComponent implements OnInit {
  races: Race[];




  constructor(private raceService:RaceService,public router:Router) { }

  ngOnInit(): void {
    this.raceService.getRaces().subscribe(
      races => this.races = races
    );

  }

  onBack(): void {
    this.router.navigate(['ranking']);
 }

}
