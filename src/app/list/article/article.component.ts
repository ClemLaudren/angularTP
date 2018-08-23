import { Input, Component, Output, EventEmitter } from '@angular/core';
import { ArticleService } from 'src/app/services/article/article.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html'
})
export class ArticleComponent {
    constructor(private articleService: ArticleService, private router: Router) {}
    
    @Input() article;
    @Output() deleted = new EventEmitter<string>();

    deleteArticle(id) {
        this.articleService.deleteArticle(this.article).subscribe(
            (response) => {
                console.log('Article deleted with success !!');
                this.deleted.emit(this.article.id);
                this.router.navigate(['/articles']);
            },
            (error) => {
                console.log('Error while deleting article.');
            }
        );
    }
}
