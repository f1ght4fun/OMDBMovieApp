import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieModel } from './../../models/movie.model';
import { MovieComponent } from './movie.component';

@Component({
  selector: 'app-movie-poster',
  template: 'app-movie-poster'
})
class MockMoviePosterComponent {
  @Input() movie: MovieModel;
}

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieComponent, MockMoviePosterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
