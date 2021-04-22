import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

import {HttpClient} from '@angular/common/http'
import { Driver } from '../drivers-ranking-global/driver';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  private urlEndPoint:string = 'http://localhost:8080/api/ranking/GP Spain'
  constructor(private http: HttpClient) { }

  getRaces(): Observable<Driver[]>{

    return this.http.get<Driver[]>(this.urlEndPoint);
  }

}

