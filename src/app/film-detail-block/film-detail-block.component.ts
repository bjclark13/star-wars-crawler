import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-film-detail-block',
  templateUrl: './film-detail-block.component.html',
  styleUrls: ['./film-detail-block.component.css']
})

export class FilmDetailBlockComponent implements OnInit {
  @Input()
  film : any;

  @Input()
  filmNumber : number;

  constructor() { }

  ngOnInit() {
  }

}
