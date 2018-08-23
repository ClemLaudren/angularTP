import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article/article.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styles: [`
        h2{
            text-align: center;
            margin: 20px 0;
        }
        .d-flex {
            flex-direction: column;
        }
        .card-title {
            color: #459696;
        }
        .card-text {
            margin: 20px 50px;
            text-align: justify;
        }
        .comment-username {
            color: #459696;
            font-size: 11px;
            font-weight: bold;
        }
        .comment-content {
            font-style: italic;
            font-size: 12px;
        }
        .comments {
            margin-left: 20%
        }
        .btn {
            background-color: #459696;
            text-align: center;
            border: none;
            height: 100%;
            margin-bottom: 40px;
            max-width: 20%;
            margin-left: 20%;
        }
    `]
})
export class DetailComponent implements OnInit {
    constructor(
        private articleService: ArticleService,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

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

    deleteArticle() {
        this.articleService.deleteArticle(this.article).subscribe(
            (success) => {
                this.router.navigate(['/articles']);
            }
        );
    }
}
