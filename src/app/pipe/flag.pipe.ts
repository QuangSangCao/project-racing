import { Pipe, PipeTransform } from "@angular/core";
import { FlagCountries } from "../service/flagCountries.js";
@Pipe({
  name: "flag"
})
export class FlagPipe implements PipeTransform {
  private countries = FlagCountries;

  transform(value: any, args?: any): any {
    const flag = this.countries.find((country: any) => {
      return country.Nationality === value;
    });
    if (flag) {
      console.log(flag.Code);
      return flag.Code.toLowerCase();
    } else {
      return "vn";
    }
  }
}
