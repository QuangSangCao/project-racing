import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {listRacer} from './model/list'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl  = 'http://ergast.com/api/f1/2013/driverStandings.json';

  ApiUrl = 'http://ergast.com/api/f1/2013/drivers/{driverId}/driverStandings.json'

  constructor(private http : HttpClient) { }

  getlistRacer() : Observable<listRacer[]> {
     return this.http.get<listRacer[]>(this.apiUrl);
  }
  getListdetailRacer () : Observable<any[]> {
    return this.http.get<any[]>(this.ApiUrl);
  }
}
