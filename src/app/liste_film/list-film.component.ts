import { Component } from '@angular/core';
import { Film } from "../Model/Film";
import { FilmServiceService } from '../film-service.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrl: './list-film.component.css'
})
export class ListFilmComponent {
        userId!: string;
        userData: any; 
        films: Film[] = [];
       searchQuery: string = '';
      username: string = '';
        constructor(private movieService: FilmServiceService,private route: ActivatedRoute,private userService :UserService) {}
        ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('userId');

    if (userId) {
      this.userService.getUsername(Number(userId)).subscribe(
        (usernameResult) => {
          console.log('usernameResult:', usernameResult);
          this.username = usernameResult.userName;
          this.movieService.getPopularMovies().subscribe(
            (moviesResult) => {
              this.films = moviesResult.results;
            },
            (moviesError) => {
              console.error('Error fetching popular movies', moviesError);
            }
          );
        },
        (usernameError) => {
          console.error('Error fetching username', usernameError);
        }
      );
    } else {
      console.error('User ID not found in route parameters');
    }
  }
              
    searchMovie(keyword: string): void {
      this.movieService.getMovieByKeyword(keyword).subscribe(
        (response: any) => {
          this.films = response.results;
        }
      );
  }
}
    


