import {ToastNotifications} from "ngx-toast-notifications";
import { Input, Component, Output, EventEmitter } from '@angular/core';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})
export class ArticleComponent {
    constructor(private articleService: ArticleService, private toasts: ToastNotifications) {}

    @Input() article;
}
