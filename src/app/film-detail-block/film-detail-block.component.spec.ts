import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDetailBlockComponent } from './film-detail-block.component';

describe('FilmDetailBlockComponent', () => {
  let component: FilmDetailBlockComponent;
  let fixture: ComponentFixture<FilmDetailBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmDetailBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDetailBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
