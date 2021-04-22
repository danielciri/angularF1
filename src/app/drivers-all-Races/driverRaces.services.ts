import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from './driver';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DriverRacesService {
  private urlEndPoint:string = 'http://localhost:8080/api/driver/5f3a3c5faa55d5c4ea549ac1'
  constructor(private http: HttpClient) { }

  getDriver(): Observable<Driver>{
    //return of (CLIENTES);
    return this.http.get<Driver>(this.urlEndPoint);
  }

}
