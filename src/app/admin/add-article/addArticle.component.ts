import { Component } from '@angular/core';
import { ArticleService } from 'src/app/services/article/article.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-article',
    templateUrl: './addArticle.component.html'
})

export class AddArticleComponent {
    constructor(private articleService: ArticleService,
        private route: ActivatedRoute,
        private router: Router) { }

    article = {};

    titleInput: FormControl;
    contentInput: FormControl;

    addArticle(form: NgForm) {
        this.articleService.addArticle(this.article).subscribe(
            (success) => {
                this.router.navigate(['/articles']);
            }
        );
    }
}
