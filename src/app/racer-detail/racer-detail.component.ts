import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Location } from "@angular/common";
import { DetailService } from "../service/detail.service";
import {ListDetail} from '../model/list-detail';
import { element } from '@angular/core/src/render3';
@Component({
  selector: "app-racer-detail",
  templateUrl: "./racer-detail.component.html",
  styleUrls: ["./racer-detail.component.scss"]
})
export class RacerDetailComponent implements OnInit {
  listDetail: ListDetail[];
  driverId: string;
  DataRacing : [];
  dataRacer : any[];
  constructor(
    private route: ActivatedRoute,
    private detail: DetailService,
    private location: Location
  ) {}
  ngOnInit() {
    this.getDriverIdFromParam();
    this.getRacerdetailFromService(this.driverId);
    this.getDetailFromService(this.driverId)
  }
  getDriverIdFromParam() {
    this.route.paramMap.subscribe((races: ParamMap) => {
      this.driverId = races.get("driverID");
    });
  }
  getDetailFromService(driverID: string) {
    this.detail.getlistRacerDetail(driverID).subscribe((res: any) => {
      this.listDetail =
        res.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
    });
  }

  getRacerdetailFromService(driverID: string) {
    this.detail.getRacerDetail(driverID).subscribe((res: any) => {
       console.log(res.MRData);
      this.DataRacing = res.MRData.RaceTable.Races;
     
    });
  }

  goBack() {
    this.location.back();
  }
}
