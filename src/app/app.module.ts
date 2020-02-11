import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmsComponent } from './films/films.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmDetailBlockComponent } from './film-detail-block/film-detail-block.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmDetailComponent,
    FilmsComponent,
    FilmDetailBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
