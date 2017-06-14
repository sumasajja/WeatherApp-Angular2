import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Iweather } from './weather';
import { weatherService } from './weather.service';

import { NumberValidators } from '../shared/number.validator';

@Component({
    templateUrl: './weather-edit-reactive.component.html'
})
export class weatherEditReactiveComponent implements OnInit {
    pageTitle: string = 'Edit weather';
    editForm: FormGroup;
    formError: { [id: string]: string };
    private validationMessages: { [id: string]: { [id: string]: string } };
    weather: Iweather;
    errorMessage: string;

    constructor(private fb: FormBuilder,
                private weatherService: weatherService,
                private router: Router,
                private route: ActivatedRoute) {

        // Initialize strings
        this.formError = {
            'title': '',
            'developers': '',
            'starRating': '',
            'description': ''
        };

        this.validationMessages = {
            'title': {
                'required': 'weather title is required',
                'minlength': 'weather title must be at least three characters.',
                'maxlength': 'weather title cannot exceed 50 characters.'
            },
            'developers': {
                'required': 'Developers is required',
                'minlength': 'Developer must be at least 5 characters.',
                'maxlength': 'Developer cannot exceed 50 characters.'
            },
            'starRating': {
                'range': 'Rate the weather between 1 (lowest) and 5 (highest).'
            }
        };
    }

    ngOnInit(): void {
        this.route.params.subscribe(
            params => {
                const id = +params['id'];
                this.getweather(id);
            }
        );
    }

    getweather(id: number): void {
        this.weatherService.getweather(id).subscribe(
            weather => this.onweatherRetrieved(weather),
            error => this.errorMessage = <any>error
        );
    }

    onweatherRetrieved(weather: Iweather): void {
        if (this.editForm) {
            this.editForm.reset();
        }
        this.weather = weather;

        if (this.weather.id === 0) {
            this.pageTitle = 'Add weather (Reactive)';
        } else {
            this.pageTitle = `Edit weather (Reactive): ${this.weather.title}`;
        }

        // With FormBuilder
        this.editForm = this.fb.group({
            'title': [this.weather.title, [Validators.required,
                                         Validators.minLength(3),
                                         Validators.maxLength(50)]],
            'developers': [this.weather.developers, [Validators.required,
                                               Validators.minLength(5),
                                               Validators.maxLength(50)]],
            'starRating': [this.weather.rating, NumberValidators.range(1, 5)],
            'description': [this.weather.desc]
        });

        this.editForm.valueChanges
            .subscribe(data => this.onValueChanged(data));
        // this.editForm.valueChanges
        //         .debounceTime(500)
        //         .subscribe(data => this.onValueChanged(data));
    }

    // Start of a generic validator
    onValueChanged(data: any): void {
        for (const field in this.formError) {
            if (this.formError.hasOwnProperty(field)) {
                const hasError = this.editForm.controls[field].dirty &&
                    !this.editForm.controls[field].valid;
                this.formError[field] = '';
                if (hasError) {
                    for (const key in this.editForm.controls[field].errors) {
                        if (this.editForm.controls[field].errors.hasOwnProperty(key)) {
                            this.formError[field] += this.validationMessages[field][key] + ' ';
                        }
                    }
                }
            }
        }
    }

    saveweather(): void {
        console.log(this.editForm);
        if (this.editForm.dirty && this.editForm.valid) {
            // Copy the form values over the object values
            const m = Object.assign({}, this.weather, this.editForm.value);

            this.weatherService.saveweather(m).subscribe(
                () => this.onSaveComplete(),
                (error: any) => this.errorMessage = <any>error
            );
        } else if (!this.editForm.dirty) {
            this.onSaveComplete();
        }
    }

    onSaveComplete(): void {
        // Reset the form to clear the flags
        this.editForm.reset();
        this.router.navigate(['/weathers']);
    }
}
