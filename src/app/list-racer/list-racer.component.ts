import { Component, OnInit } from "@angular/core";
import { ApiService } from "../service/api.service";
import { HttpClient } from "@angular/common/http";
import { listRacer } from "../model/list";
import { element } from "@angular/core/src/render3";
import { Router } from "@angular/router";
import { DetailService } from "../service/detail.service";

@Component({
  selector: "app-list-racer",
  templateUrl: "./list-racer.component.html",
  styleUrls: ["./list-racer.component.scss"]
})
export class ListRacerComponent implements OnInit {
  listRacers: listRacer[];
  dataRacer: any[];
  searchTeam: string;

  constructor(private ListRacer: ApiService, private router: Router) {}

  getlistRacerFromService() {
    this.ListRacer.getlistRacer().subscribe((res: any) => {
      this.listRacers =
        res.MRData.StandingsTable.StandingsLists[0].DriverStandings;
      console.log(this.listRacers);

      this.dataRacer = this.listRacers.map((element: any) => {
        return {
          position: element.position,
          nationality: element.Driver.nationality,
          givenName: element.Driver.givenName,
          familyName: element.Driver.familyName,
          name: element.Constructors[0].name,
          points: element.points,
          driverId: element.Driver.driverId
        };
      });
    });
  }

  ngOnInit() {
    this.getlistRacerFromService();
  }

  navigateToDetailRacer(driverID: any) {
    this.router.navigate(["detail" , driverID]);
  }
}
