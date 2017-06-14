import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Iweather } from './weather';
import { weatherService } from './weather.service';
import { RangeValidatorDirective } from '../shared/range.directive';

@Component({
    templateUrl: './weather-edit.component.html'
})
export class weatherEditComponent implements OnInit {
    pageTitle: string = 'Edit weather';
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

    deleteweather(): void {
        if (this.weather.id === 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete();
        } else {
            if (confirm(`Really delete the weather: ${this.weather.title}?`)) {
                this.weatherService.deleteweather(this.weather.id).subscribe(
                    () => this.onSaveComplete(),
                    (error: any) => this.errorMessage = <any>error
                );
            }
        }
    }

    getweather(id: number): void {
        this.weatherService.getweather(id).subscribe(
            weather => this.onweatherRetrieved(weather),
            error => this.errorMessage = <any>error
        );
    }

    onweatherRetrieved(weather: Iweather): void {
        this.weather = weather;
        if (this.weather.id === 0) {
            this.pageTitle = 'Add weather (Template-driven)';
        } else {
            this.pageTitle = `Edit weather (Template-driven): ${this.weather.title}`;
        }
    }

    onSaveComplete(): void {
        // Navigate back to the weather list
        this.router.navigate(['/weathers']);
    }

    saveweather(editForm: NgForm): void {
        console.log(editForm);
        if (editForm.dirty && editForm.valid) {
            this.weatherService.saveweather(this.weather).subscribe(
                () => this.onSaveComplete(),
                (error: any) => this.errorMessage = <any>error
            );
        } else {
            this.errorMessage = 'Please correct the validation errors.';
        }
    }
}
