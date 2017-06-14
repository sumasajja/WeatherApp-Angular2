import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Iweather } from './weather';
import { weatherService } from './weather.service';

@Component({
    templateUrl: './weather-detail.component.html',
    styleUrls: ['./weather-detail.component.css']
})
export class weatherDetailComponent implements OnInit {
    pageTitle: string = 'weather Detail';
    weather: Iweather;
    errorMessage: string;

    constructor(private weatherService: weatherService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(
            params => {
                const id = +params['id'];
                this.getweather(id);
            }
        );
    }

    getweather(id: number) {
        this.weatherService.getweather(id)
            .subscribe(
                (weather: Iweather) => this.weather = weather,
                (error: any) => this.errorMessage = <any>error);
    }

    onBack() {
        this.router.navigate(['/weathers']);
    }
}
