import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{ HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { TodayComponent } from './today/today.component';
import { FutureComponent } from './future/future.component';
import { PollutionComponent } from './pollution/pollution.component';

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    FutureComponent,
    PollutionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
