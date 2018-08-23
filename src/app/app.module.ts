import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { ArticleComponent } from './list/article/article.component';

import { ArticleService } from './services/article/article.service';
import { TruncatePipe } from './pipes/TruncatePipe';

import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { UpdateArticleComponent } from './admin/update-article/updateArticle.component';
import { AddArticleComponent } from './admin/add-article/addArticle.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'articles', component: ListComponent },
  { path: 'articles/new', component: AddArticleComponent },
  { path: 'articles/:id', component: DetailComponent },
  { path: 'articles/update/:id', component: UpdateArticleComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    ListComponent,
    AddArticleComponent,
    ArticleComponent,
    UpdateArticleComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
