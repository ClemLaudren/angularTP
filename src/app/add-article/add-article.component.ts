import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article/article.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../services/category/category.service';
import {forEach} from '@angular/router/src/utils/collection';
import {ToastNotifications} from 'ngx-toast-notifications';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  constructor(
      private articleService: ArticleService,
      private categoryService: CategoryService,
      private router: Router,
      private toasts: ToastNotifications
  ) { }

  article = {
      categories : []
  };
  categories;
  titleInput: FormControl;

  ngOnInit() {
    this.categoryService.getCategories().subscribe(
        (response) => {
          this.categories = response;
        },
        (error) => {
            console.error('Error with get categories: ' + error);
        }
    );
  }

  addArticle(form: NgForm) {
    this.articleService.addArticle(this.article).subscribe(
      (response) => {
        this.router.navigate(['/articles']);
          this.toasts.next({text: 'Good Job ! Article was created with success.', type: 'success'});
      },
      (error) => {
          this.toasts.next({text: 'Warning ! Error while creating article. ' + error , type: 'danger'});
      }
    );
  }

}
