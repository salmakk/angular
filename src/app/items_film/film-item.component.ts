import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';  

import { Film } from '../Model/Film';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent {
  @Input() film!: Film;

  constructor(private router: Router) {}  

  godetail() {
    this.router.navigate(['details',this.film.id]);
  }
  addToFavorites() {

    console.log('Ajouter aux favoris :', this.film.title);

  }
}
