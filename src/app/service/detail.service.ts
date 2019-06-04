import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DetailService {
  constructor(private Http : HttpClient) { }

  getlistRacerDetail(driverID: string) {
    return this.Http.get(
      `http://ergast.com/api/f1/2013/drivers/${driverID}/driverStandings.json`
    );
  }
  getRacerDetail(driverID: string) {
    return this.Http.get(
      `http://ergast.com/api/f1/2013/drivers/${driverID}/results.json`
    );
  }
}
