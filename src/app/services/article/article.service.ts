import { Injectable } from '@angular/core';

@Injectable()
export class ArticleService {
    constructor() { }

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
        return this.articles;
    }

}
