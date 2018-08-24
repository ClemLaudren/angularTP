import { Input, Component } from '@angular/core';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styles: [`
        .card {
            margin-bottom: 40px;
        }
    `]
})

export class CategoryComponent {
    @Input() category;
}
