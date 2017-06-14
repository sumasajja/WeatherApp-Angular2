import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { Iweather } from './weather';

@Injectable()
export class weatherService {
    private weathersUrl = 'api/weathers';

    constructor(private http: Http) { }

    getweathers(): Observable<Iweather[]> {
        return this.http.get(this.weathersUrl)
            .map((res: Response) => <Iweather[]>res.json().data)
            .do(data => console.log(JSON.stringify(data)))
            .catch(this.handleError);
    }

    getweather(id: number): Observable<Iweather> {
        if (id === 0) {
            return Observable.of(this.initializeweather());
        };
        const url = `${this.weathersUrl}/${id}`;
        return this.http.get(url)
            .map((res: Response) => {
                const body = res.json();
                return <Iweather>body.data || {};
            })
            .do(data => console.log(JSON.stringify(data)))
            .catch(this.handleError);
    }

    deleteweather(id: number): Observable<Response> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        const url = `${this.weathersUrl}/${id}`;
        return this.http.delete(url, options)
            .do(data => console.log('deleteweather: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    saveweather(weather: Iweather): Observable<Iweather> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        if (weather.id === 0) {
            return this.createweather(weather, options);
        }
        return this.updateweather(weather, options);
    }

    private createweather(weather: Iweather, options: RequestOptions): Observable<Iweather> {
        weather.id = undefined;
        return this.http.post(this.weathersUrl, weather, options)
            .map((res: Response) => <Iweather[]>res.json().data)
            .do(data => console.log('createweather: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    private initializeweather(): Iweather {
        // Return an initialized object
        return {
                    id: 0,
                    approvalRating: null,
                    desc: '',
                    developers: '',
                    imgsrc: '',
                    mpaa: '',
                    price: null,
                    releaseDate: '',
                    rating: null,
                    title: ''
        };

    }

    private updateweather(weather: Iweather, options: RequestOptions): Observable<Iweather> {
        const url = `${this.weathersUrl}/${weather.id}`;
        return this.http.put(url, weather, options)
            .map(() => weather)
            .do(data => console.log('updateweather: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
}
