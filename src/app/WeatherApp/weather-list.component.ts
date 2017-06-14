import { Component, OnInit } from '@angular/core';

import { Iweather } from './weather';
import { weatherService } from './weather.service';

@Component({
    templateUrl: './weather-list.component.html',
    styleUrls: ['./weather-list.component.css']
})
export class weatherListComponent implements OnInit {
    pageTitle: string = 'weather List';
    listFilter: string = '';
    showImage: boolean = false;
    weathers: Iweather[];
    errorMessage: string;

    constructor(private weatherService: weatherService) { }

    ngOnInit() { this.getweathers(); }

    getweathers() {
        this.weatherService.getweathers()
            .subscribe(
                (weathers: Iweather[]) => this.weathers = weathers,
                (error: any) => this.errorMessage = <any>error);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}
