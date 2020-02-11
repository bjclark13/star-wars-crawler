import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
  film_id : number;
  film : any;
  loading: boolean = true;
  crawlData: string[] = [];

  constructor(private _service : StarWarsService, private route: ActivatedRoute) { }

  ngOnInit() {
    // get from the route param
    this.film_id = this.route.snapshot.params.filmId;

    // call the API with that film
    this._service.getFilm(this.film_id).subscribe( data => {
      this.film = data;
      this.loading = false;

      const crawlData = this.film.opening_crawl.split('\r\n');

      let i = 0;

      setInterval( () => {
        if ( i < crawlData.length ) {
          this.crawlData.push(crawlData[i]);
          i++;
        }
      }, 1000)
    });
  }
}
