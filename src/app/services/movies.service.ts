import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient,
  ) { }

  public getMovies(): Observable<any> {

    //TMDB
    const BASE_URL = 'https://api.themoviedb.org/3/';
    const API_KEY = 'api_key=af51cf46b62efc20e707d35580ee2e38';
    const API_URL = `${BASE_URL}discover/movie?sort_by=popularity.desc&${API_KEY}`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.get<any>(`${API_URL}`, httpOptions);
  }
}
