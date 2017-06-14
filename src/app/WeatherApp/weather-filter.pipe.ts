import { Pipe, PipeTransform } from '@angular/core';
import { Iweather } from './weather';

@Pipe({
    name: 'weatherFilter'
})
export class weatherFilterPipe implements PipeTransform {

    transform(value: Iweather[], filter: string): Iweather[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((weather: Iweather) =>
            weather.title.toLocaleLowerCase().search(filter) !== -1) : value;
    }
}
