import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-category',
    templateUrl: './addCategory.component.html'
})

export class AddCategoryComponent {
    constructor(private categoryService: CategoryService,
        private route: ActivatedRoute,
        private router: Router) { }

    category = {};

    titleInput: FormControl;

    addCategory(form: NgForm) {
        this.categoryService.addCategory(this.category).subscribe(
            (success) => {
                this.router.navigate(['/categories']);
            }
        );
    }
}
