import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



import { Driver } from '../models/driver';
import { DriverService } from './driver.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls:['./drivers-ranking.component.css']
})
export class DriversComponent implements OnInit {

  ranking: string = "Ranking:";
  drivers: Driver[] = [];
  races: String[] = [];
  url = "http://localhost:8080/api/ranking/";



  constructor(private driverService: DriverService,
    private activatedRoute: ActivatedRoute, private router:Router

  ) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);

      let name: String = params['name'];

      if (name === undefined) {
        this.driverService.getDrivers(this.url).subscribe(
          drivers => this.drivers = drivers
        
        );
        this.ranking = this.ranking + ' Global';
        
      } else {
        let url = this.url + name;
        this.driverService.getDrivers(url).subscribe(
          drivers => this.drivers = drivers
        );
        this.ranking = this.ranking + ' '+name;
      }




    })

  }
  onBack(): void {
    this.router.navigate(['ranking']);
 }

}
