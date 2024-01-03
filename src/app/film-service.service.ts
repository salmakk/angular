import { Injectable } from '@angular/core';
import { Film } from './Model/Film';
import { HttpClient } from '@angular/common/http';
import { Observable ,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmServiceService {
 

private apiKey = '65cb4726f6ee74e643b469b85a08034b';
private apiUrl = 'https://api.themoviedb.org/3';
private   searchQueryChangedSource: string = '';
constructor(private http: HttpClient) {}
getPopularMovies(): Observable<any> {
 
  return this.http.get(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}`);
}
searchMovies(query: string): Observable<any> {
  const url = `${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}`;
  return this.http.get(url);
}
getMovieById(movieId: number): Observable<any> {
  const url = `${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}`;
  return this.http.get(url);
}   
getMovieByKeyword(keyword: string): Observable<any> {
  return this.http.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=6a99c14b767fa1380fe1cfd1ad04bbe8&language=fr&query=${keyword}&page=1`)
}
}