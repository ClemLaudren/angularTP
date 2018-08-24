import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
    selector: 'app-list-categories',
    templateUrl: './list-categories.component.html',
    styles: [`
        .btn-add-article {
            background-color: #0099cc;
            color: #FFF;
            margin: 60px 0;
        }
    `]
})
export class ListCategoriesComponent {
    constructor(
        private categoryService: CategoryService
    ) { }

    categories;

    ngOnInit() {

        this.categoryService.getCategories().subscribe(
            (response) => {
                this.categories = response;
            },
            (error) => {
                throw new Error('Error with API :' + error);
            });
    }
}
