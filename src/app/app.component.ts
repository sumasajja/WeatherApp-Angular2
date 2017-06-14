import { Component } from '@angular/core';

@Component({
    selector: 'mh-root',
    template: `
    <div class="container">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <a class="navbar-brand">{{pageTitle}}</a>
                <ul class="nav navbar-nav">
                    <li><a [routerLink]="['/weathers']">weather List</a></li>
                    <li><a [routerLink]="['/weathers', 0, 'edit']">Add weather</a></li>
                </ul>
            </div>
        </nav>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
     </div>
     `
})
export class AppComponent {
    pageTitle: string = 'Weather App';
}
