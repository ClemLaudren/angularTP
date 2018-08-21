import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ArticleComponent } from './list/article/article.component';

import { ArticleService } from './services/article/article.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
