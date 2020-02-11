import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

interface RedditPost {
    data: {
      title;
      permalink;
      thumbnail;
    }
};

interface RedditResponse {
  data: {
    children: RedditPost[]
  }
} 


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  constructor( private _service : StarWarsService ) { }
  films : RedditPost[];

  ngOnInit() {
    this._service.getFilms().subscribe((response : RedditResponse) => {
     // this.films = data.results;
     this.films = response.data.children;
    }, err => console.error(err));
  }

  callbackFunction(response) {
    console.log(response);
  }

}

