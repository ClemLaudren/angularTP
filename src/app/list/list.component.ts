import { Component } from '@angular/core';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styles: [`
        .btn-add-article {
            background-color: #0099cc;
            color: #FFF;
            margin: 60px 0;
        }
        .searchbar{
            margin-bottom: 100px;
        }
    `]
})
export class ListComponent {
    constructor(
        private articleService: ArticleService,
    ) { }

    articles;

    ngOnInit() {
        this.articleService.getArticles().subscribe(
            (response) => {
                this.articles = response;
            },
            (error) => {
                throw new Error('Error with API :' + error);
            });
    }
}
