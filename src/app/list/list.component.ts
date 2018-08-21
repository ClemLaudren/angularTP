import { Component } from '@angular/core';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html'
})
export class ListComponent {
    constructor(private articleService: ArticleService) {
        console.log("articles OK")
    }

    articles = [];

    ngOnInit() {
        this.articles = this.articleService.getArticles();
    }
}
