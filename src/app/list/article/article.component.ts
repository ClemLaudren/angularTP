import { Input, Component } from '@angular/core';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styles: [`
        .card-title {
            color: #459696;
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
        .btn {
            background-color: #459696;
            text-align: center;
        }
    `]
})

export class ArticleComponent {
    @Input() article;
}
