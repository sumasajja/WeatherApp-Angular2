import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { weatherData } from './WeatherApp/weather-data';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';

/* Feature Modules */
import { weatherModule } from './WeatherApp/weather.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(weatherData),
    RouterModule.forRoot([
      { path: '', redirectTo: 'weathers', pathMatch: 'full'},
      { path: '**', component: PageNotFoundComponent }
    ]),
    weatherModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
