import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListRacerComponent} from './list-racer/list-racer.component';
import {RacerDetailComponent} from './racer-detail/racer-detail.component';

const routes: Routes = [
  {path : "" , component : ListRacerComponent},
  {path : "detail/:driverID" , component : RacerDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
