import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ListComponent} from './list/list.component';
import {ArticleComponent} from './list/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
