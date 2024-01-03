import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-rout.module';
import { AppComponent } from './app.component';
import { FilmItemComponent } from './items_film/film-item.component';
import { ListFilmComponent } from './liste_film/list-film.component';
import { FilmDetailsComponent } from './details_film/film-details.component';
import { FilmServiceService } from './film-service.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommentsComponent } from './Commentaire/comments.component';
import { LoginComponent } from './authentification/login.component';
import { RegistrationComponent } from './Inscription/registration.component';
import { HomeComponent } from './Home/home.component';
import { TheCommentsComponent } from './Commentaires/the-comments.component';
@NgModule({
  declarations: [
    AppComponent,
    FilmItemComponent,
    ListFilmComponent,
    FilmDetailsComponent,
    CommentsComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    TheCommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
   
  ],
  providers: [FilmServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
