import { Component,ViewEncapsulation } from '@angular/core';

import { SAMPLE_DATA } from './data';


@Component({
    selector: 'my-app',
    styleUrls: [
        'src/app/app.component.css',
        'src/assets/font-awesome/css/font-awesome.min.css'
    ],
    templateUrl: '/src/app/app.component.html',
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    pageTitle = 'SadhguruJS-Beginners';
    pageCaption = 'Promoting Yoga while Programming';
    yogaPractice = require('../assets/imgs/HataYoga01.jpg');

    sampleData= SAMPLE_DATA;

    ngAfterViewInit() {
        $('.panel-title').html("Help Topics")
    }
}
