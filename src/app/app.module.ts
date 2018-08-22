import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ArticleComponent } from './list/article/article.component';

import { ArticleService } from './services/article/article.service';
import { TruncatePipe } from './pipes/TruncatePipe';

import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'articles', component: ListComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ArticleComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
