import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { weatherListComponent } from './weather-list.component';
import { weatherDetailComponent } from './weather-detail.component';
import { weatherEditComponent } from './weather-edit.component';
import { weatherEditReactiveComponent } from './weather-edit-reactive.component';

import { weatherFilterPipe } from './weather-filter.pipe';
import { weatherService } from './weather.service';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'weathers', component: weatherListComponent },
      { path: 'weathers/:id', component: weatherDetailComponent },
      { path: 'weathers/:id/edit', component: weatherEditComponent },
      { path: 'weathers/:id/editReactive', component: weatherEditReactiveComponent }
    ])
  ],
  declarations: [
    weatherListComponent,
    weatherDetailComponent,
    weatherEditComponent,
    weatherEditReactiveComponent,
    weatherFilterPipe
  ],
  providers: [
    weatherService
  ]
})
export class weatherModule {}
