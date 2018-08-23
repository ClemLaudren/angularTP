import {ToastNotifications} from "ngx-toast-notifications";
import { Input, Component, Output, EventEmitter } from '@angular/core';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html'
})
export class ArticleComponent {
    constructor(private articleService: ArticleService, private toasts: ToastNotifications) {}

    @Input() article;
    @Output() deleted = new EventEmitter<string>();

    deleteArticle(id) {
        this.articleService.deleteArticle(this.article).subscribe(
            (response) => {
                this.deleted.emit(this.article.id);
                this.toasts.next({text: 'Good Job ! Article deleted with success.', type: 'success'});
            },
            (error) => {
                this.toasts.next({text: 'Warning ! Error while deleting article. ' + error , type: 'danger'});
            }
        );
    }
}
