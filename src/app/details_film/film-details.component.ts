import { Component,Input } from '@angular/core';
import { Film } from '../Model/Film';
import { FilmServiceService } from '../film-service.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.css'
})
export class FilmDetailsComponent {
  film!:Film;

  constructor(private route: ActivatedRoute,private moviesService: FilmServiceService,private http:HttpClient) {}
  
  ngOnInit(): void {
    
    const filmId: number = +this.route.snapshot.params['id'];
    this.moviesService.getMovieById(filmId).subscribe(
      (film: any) => {
        this.film = film;
      },
      (error) => {
        console.error('Error fetching movie details:', error);
      }
    );
  }
  addFilm() {
    this.http.post('http://localhost:8080/api/films', this.film)
      .subscribe(
        (addedFilm: any) => {
          console.log('Added Film:', addedFilm);
        },
        (error) => {
          console.error('Error adding film:', error);
        }
      );
  }
  }

  

