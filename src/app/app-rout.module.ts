import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailsComponent } from './details_film/film-details.component';
import { ListFilmComponent } from './liste_film/list-film.component';
import { LoginComponent } from './authentification/login.component';
import { RegistrationComponent } from './Inscription/registration.component';
import { HomeComponent } from './Home/home.component';
const routes: Routes = [
  {path:'details/:id', component: FilmDetailsComponent},
  {path:'user/:userId', component: ListFilmComponent},
  {path:'registration',component: RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
