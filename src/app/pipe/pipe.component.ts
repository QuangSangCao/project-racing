import { Pipe, PipeTransform } from "@angular/core";
import { listRacer } from "../model/list";
import { element } from "@angular/core/src/render3";
@Pipe({
  name: "RacerFilterPipe"
})
export class RacerFilterPipe implements PipeTransform {
  transform(dataRacer: any[], searchTeam: string): any {
    if (!dataRacer || !searchTeam) {
      return dataRacer;
    }

    return dataRacer.filter(dataRacer => {
      const byGivenName =
        dataRacer.givenName.toLowerCase().indexOf(searchTeam.toLowerCase()) !==
        -1;
      const byFamilyName =
        dataRacer.familyName.toLowerCase().indexOf(searchTeam.toLowerCase()) !==
        -1;
      return byGivenName || byFamilyName;
    });
  }

  constructor() {}

  ngOnInit() {}
}
