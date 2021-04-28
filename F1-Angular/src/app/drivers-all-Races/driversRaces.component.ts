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

  id:string;
  sub;
  constructor(private driverService:DriverRacesService, private _Activatedroute:ActivatedRoute,
    private _router:Router) {  }

  ngOnInit(): void {
    this.sub=this._Activatedroute.params.subscribe(params => { 
      
       this.id = params['id'];
       let urlcorrect :string = this.urlEndPoint + this.id;
       console.log(this.id);
       
       this.driverService.getDriver(urlcorrect).subscribe(
        driver => this.driver = driver
      
  
      );
  
   });

    

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
