import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListRacerComponent } from './list-racer/list-racer.component';
import { RacerDetailComponent } from './racer-detail/racer-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './api.service';
import {RacerFilterPipe} from './pipe/pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    ListRacerComponent,
    RacerDetailComponent,
    RacerFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
