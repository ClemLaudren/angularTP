import { Component } from '@angular/core';
import { ArticleService } from 'src/app/services/article/article.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Router } from '@angular/router';

@Component({
    selector: 'app-update-article',
    templateUrl: './updateArticle.component.html'
})
export class UpdateArticleComponent {
    constructor(private articleService: ArticleService,
                private route: ActivatedRoute,
                private router: Router) {}

    article = {};

    ngOnInit() {
        this.route.params.subscribe(
            (params): void => {
                const id = Number(params.id); // Les paramètres sont toujours des string
                this.articleService.getArticleById(id).subscribe(
                (response) => {
                    console.log(response);
                    this.article = response;
                },
                (error) => {
                    throw new Error('Error with API :' + error.toString());
                });
            },
            (error) => {
                throw new Error('Error with params:' + error.toString());
            }
        );
    }

    updateArticle(form: NgForm) {
        const articleUpdated = {...this.article, ...form.value}
        this.articleService.updateArticle(articleUpdated).subscribe(
            (success) => {
                this.router.navigate(['/articles']);
            }
        );
    }
}
