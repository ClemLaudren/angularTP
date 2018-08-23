import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: [`
        h1 { 
            font-weight: normal; 
            color: #293d48;
            text-align: center;
        }
        h2 {
            color: #459696;
            text-align: center;
        }
    `]
})
export class HomeComponent {
    constructor() { }
}
