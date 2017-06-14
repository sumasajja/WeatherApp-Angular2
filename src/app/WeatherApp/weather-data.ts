import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Iweather } from './weather';

export class weatherData implements InMemoryDbService {

    createDb() {
        const weathers: Iweather[] = [
    {
        "id": 1,
        "title": "Weather Timeline",
        "rating": 5,
        "price":2.98,
        'mpaa': 'pg-13',
        'releaseDate': '2001-12-19T00:00:00',
        "developers": "Matthew",
        'approvalRating': 0.17,
        "desc": "Available for $1.49 on the Play Store, Weather Timeline could be the best money you ever spend. It brings genuinely useful and interesting features together into a wonderful interface and library of widgets.",
		"imgsrc": "https://fscl01.fonpit.de/userfiles/6727621/image/2016/Screenshots/AndroidPIT-weather-apps-1-w782.jpg"
    },
    {
        "id": 2,
        "title": "Precise Weather YoWindow",
        "rating": 4,
        "price":4.98,
        "developers": "Jim Carrey",
        'mpaa': 'pg-13',
        'approvalRating': 0.17,
        'releaseDate': '2001-12-19T00:00:00',
        "imgsrc": "https://fscl01.fonpit.de/userfiles/6727621/image/2016/Screenshots/AndroidPIT-weather-apps-2-w782.jpg",
		"desc": "It's available for free with ads or paid ($2.99) without ads. When you get bored of looking at a field, you can select from a few different backgrounds too. That said, there are no widget options on this app. "
    },
    {
        "id": 3,
       "title": "Dark Sky",
        "rating": 3,
        "price":1.18,
        'mpaa': 'pg-13',
        'releaseDate': '2001-12-19T00:00:00',
        "developers": "Matthew",
        'approvalRating': 0.17,
        "imgsrc": "https://fscl01.fonpit.de/userfiles/6727621/image/2016/Screenshots/AndroidPIT-weather-apps-2-w782.jpg",
		"desc": "It's available for free with ads or paid ($2.99) without ads. When you get bored of looking at a field, you can select from a few different backgrounds too. That said, there are no widget options on this app. "
    },
    {
        "id": 4,
       "title": "Morecast",
        "rating": 4,
        "developers": "Matthew",
        "price":9.98,
        'mpaa': 'pg-13',
        'releaseDate': '2001-12-19T00:00:00',
        'approvalRating': 0.17,
        "imgsrc": "https://fscl01.fonpit.de/userfiles/6727621/image/2016/Screenshots/AndroidPIT-weather-apps-2-w782.jpg",
		"desc": "It's available for free with ads or paid ($2.99) without ads. When you get bored of looking at a field, you can select from a few different backgrounds too. That said, there are no widget options on this app. "
    },  
	{
        "id": 5,
       "title": "WeatherBug",
        "rating": 2,
        "price":5.98,
        'mpaa': 'pg-13',
        'releaseDate': '2001-12-19T00:00:00',
        'approvalRating': 0.17,
        "developers": "Matthew",
        "imgsrc": "https://fscl01.fonpit.de/userfiles/6727621/image/2016/Screenshots/AndroidPIT-weather-apps-2-w782.jpg",
		"desc": "It's available for free with ads or paid ($2.99) without ads. When you get bored of looking at a field, you can select from a few different backgrounds too. That said, there are no widget options on this app. "
    },
	{
        "id": 6,
       "title": "WeatherBomb",
        "rating": 2,
        "price":9.98,
        "developers": "Matthew",
        'mpaa': 'pg-13',
        'releaseDate': '2001-12-19T00:00:00',
        'approvalRating': 0.17,
        "imgsrc": "https://fscl01.fonpit.de/userfiles/6727621/image/2016/Screenshots/AndroidPIT-weather-apps-2-w782.jpg",
		"desc": "It's available for free with ads or paid ($2.99) without ads. When you get bored of looking at a field, you can select from a few different backgrounds too. That said, there are no widget options on this app. "
    },
	{
        "id": 7,
       "title": "The Weather Channel",
        "rating": 5,
        "price":2.98,
        "developers": "Jim Jackson",
        'mpaa': 'pg-13',
        'releaseDate': '2001-12-19T00:00:00',
        'approvalRating': 0.17,
        "imgsrc": "https://fscl01.fonpit.de/userfiles/6727621/image/2016/Screenshots/AndroidPIT-weather-apps-2-w782.jpg",
		"desc": "It's available for free with ads or paid ($2.99) without ads. When you get bored of looking at a field, you can select from a few different backgrounds too. That said, there are no widget options on this app. "
    },
	{
        "id": 8,
       "title": "Accuweather",
        "rating": 5,
        "price":1.98,
        "developers": "Jim Joe",
        'mpaa': 'pg-13',
        'releaseDate': '2001-12-19T00:00:00',
        'approvalRating': 0.17,
        "imgsrc": "https://fscl01.fonpit.de/userfiles/6727621/image/2016/Screenshots/AndroidPIT-weather-apps-2-w782.jpg",
		"desc": "It's available for free with ads or paid ($2.99) without ads. When you get bored of looking at a field, you can select from a few different backgrounds too. That said, there are no widget options on this app. "
    },{
        "id": 9,
       "title": "Yahoo weather",
        "rating": 5,
        "price":9.98,
        "developers": "Jim Joe",
        'mpaa': 'pg-13',
        'releaseDate': '2001-12-19T00:00:00',
        'approvalRating': 0.17,
        "imgsrc": "https://fscl01.fonpit.de/userfiles/6727621/image/2016/Screenshots/AndroidPIT-weather-apps-2-w782.jpg",
		"desc": "It's available for free with ads or paid ($2.99) without ads. When you get bored of looking at a field, you can select from a few different backgrounds too. That said, there are no widget options on this app. "
    },{
        "id": 10,
       "title": "NOAA Weather Radar and Alerts",
        "rating": 5,
        "price":9.18,
        "developers": "Jim JOE",
        'mpaa': 'pg-13',
        'approvalRating': 0.17,
        'releaseDate': '2001-12-19T00:00:00',
        "imgsrc": "https://fscl01.fonpit.de/userfiles/6727621/image/2016/Screenshots/AndroidPIT-weather-apps-2-w782.jpg",
		"desc": "It's available for free with ads or paid ($2.99) without ads. When you get bored of looking at a field, you can select from a few different backgrounds too. That said, there are no widget options on this app. "
    }
]
        return { weathers };
    }
}
