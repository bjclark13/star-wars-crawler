import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  baseUrl = "https://swapi.dev/api/films";
  
  constructor(private http: HttpClient) { }

  getFilms() {
    return this.http.get(this.baseUrl);
  }

  getFilm( filmId : number ) {
    return this.http.get(`${this.baseUrl}/${filmId}`);
  }
}
