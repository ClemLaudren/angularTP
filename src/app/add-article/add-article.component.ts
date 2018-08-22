import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article/article.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  constructor(private articleService: ArticleService, private router: Router) { }

  article = {};
  titleInput: FormControl;

  ngOnInit() {}

  addArticle(form: NgForm) {
    console.log(form.value['title'])
    
    this.articleService.addArticle(this.article).subscribe(
      (response) => {
        console.log('Article created successfuly');
        this.router.navigate(['/articles']);
      },
      (error) => {
        console.error('Error while creating article: ' + error);
      }
    );
  }

}
