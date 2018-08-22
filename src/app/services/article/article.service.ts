import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArticleService {
    constructor(private http: HttpClient) {}
    getArticles() {
        return this.http.get('http://localhost:8080/rest/articles');
    }

    getArticleById(id) {
        return this.http.get('http://localhost:8080/rest/articles/' + id);
    }

    updateArticle(articleUpdated) {
        return this.http.put('http://localhost:8080/rest/articles/' + articleUpdated.id, articleUpdated);
    }

    addArticle(newArticle) {
        return this.http.post('http://localhost:8080/rest/articles', newArticle);
    }

}
