import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
    constructor(private articleService: ArticleService, private route: ActivatedRoute) {}

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
}
