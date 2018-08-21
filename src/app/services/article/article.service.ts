import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArticleService {
    constructor(private http: HttpClient) { }

    articles = [
        {
            title: 'J\'apprécie les fruits au sirop',
            content: 'En garde ma grosse tata',
            comments: [
                {
                    username: 'John Wick',
                    description: 'C\'est la guerre !'
                }
            ]
        },
        {
            title: 'Pas changer assiette pour fromage',
            content: 'Faut mettre du beurre au fond du plat pour pas que le gratin colle',
            comments: []
        }
    ];

    getArticles() {
        return this.http.get('http://localhost:8080/rest/articles');
    }

}
