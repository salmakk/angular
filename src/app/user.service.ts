import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  getUsername(userId: number): Observable<any> {
    const endpoint = `${this.apiUrl}/${userId}`; 
    return this.http.get<any>(endpoint);
  }
}
