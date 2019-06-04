import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {listRacer} from '../model/list'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl  = 'http://ergast.com/api/f1/2013/driverStandings.json';



  constructor(private http : HttpClient) { }
  getlistRacer() : Observable<listRacer[]> {
     return this.http.get<listRacer[]>(this.apiUrl);
  }
 
}
