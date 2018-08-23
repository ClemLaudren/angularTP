import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import {ToastNotifications} from 'ngx-toast-notifications';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
    constructor(private articleService: ArticleService,
        private route: ActivatedRoute,
        private router: Router,
        private toasts: ToastNotifications
    ) {}

    article: any = {};
    comment: any = {};

    ngOnInit() {
        this.route.params.subscribe(
            (params): void => {
                const id = Number(params.id); // Les paramètres sont toujours des string
                this.articleService.getArticleById(id).subscribe(
                (response) => {
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

    addComment(form: NgForm) {
        this.articleService.addComment(this.article.id, this.comment).subscribe(
            (response) => {
              this.router.navigate(['/articles']);
              this.toasts.next({text: 'Good Job ! Comment was created with success.', type: 'primary'});
            },
            (error) => {
                this.toasts.next({text: 'Warning ! Error while creating comment. ' + error , type: 'danger'});
            }
          );
    }
}
