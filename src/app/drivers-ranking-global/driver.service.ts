import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Driver } from './driver';
import {HttpClient} from '@angular/common/http'
import { Race } from '../races-per-circuit/race';


@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private urlEndPoint:string = 'http://localhost:8080/api/ranking'
  private urlEndPointRaces: string = 'http://localhost:8080/api/races';
  constructor(private http: HttpClient) { }

  getDrivers(): Observable<Driver[]>{
    //return of (CLIENTES);
    return this.http.get<Driver[]>(this.urlEndPoint);
  }

  getRaces(): Observable<Race[]>{
    //return of (CLIENTES);
    return this.http.get<Race[]>(this.urlEndPointRaces);
  }

}
