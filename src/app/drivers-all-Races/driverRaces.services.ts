import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {HttpClient} from '@angular/common/http'
import { Driver } from '../models/driver';

@Injectable({
  providedIn: 'root'
})
export class DriverRacesService {

  constructor(private http: HttpClient) { }

  getDriver(url:string): Observable<Driver>{
    //return of (CLIENTES);
    return this.http.get<Driver>(url);
  }

}
