import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

import {HttpClient} from '@angular/common/http'
import { Race } from '../models/race';




@Injectable({
  providedIn: 'root'
})
export class RaceService {
  private urlEndPointRaces: string = 'http://localhost:8080/api/races';
  constructor(private http: HttpClient) { }

  getRaces(): Observable<Race[]>{
    //return of (CLIENTES);
    return this.http.get<Race[]>(this.urlEndPointRaces);
  }


}

