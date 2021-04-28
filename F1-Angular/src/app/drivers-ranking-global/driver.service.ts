import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Driver } from '../models/driver';
import {HttpClient} from '@angular/common/http'
import { Race } from '../models/race';




@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private urlEndPointRaces: string = 'http://localhost:8080/api/races';
  constructor(private http: HttpClient) { }

  getDrivers(url:string): Observable<Driver[]>{
    //return of (Driver);
    return this.http.get<Driver[]>(url);
  }

  getRaces(): Observable<Race[]>{
    //return of (race);
    return this.http.get<Race[]>(this.urlEndPointRaces);
  }

}
