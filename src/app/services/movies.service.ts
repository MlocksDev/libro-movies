import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }
}
