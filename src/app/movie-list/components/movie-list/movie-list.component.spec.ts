import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MovieListService } from '../../services/movie-list.service';
import { MovieListComponent } from './movie-list.component';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let srv: MovieListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieListComponent],
      providers: [
        {
          provide: MovieListService,
          useValue: {
            fetchMovies: () => {},
            clearResults: () => {},
            movies$: of([]),
            fetchingInProgress$: of(true)
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    srv = TestBed.inject(MovieListService);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('trackBy', () => {
    it('returns correct', () => {
      expect(component.trackByFn(1, undefined)).toEqual(1);
      expect(component.trackByFn(1, { id: 'banana' })).toEqual('banana');
    });
  });

  describe('onSearchCriteriaChanged', () => {
    it('clears search result because token < 2 chars', () => {
      const spy = spyOn(srv, 'clearResults');

      component.onSearchCriteriaChanged('bl');

      expect(spy).toHaveBeenCalled();
    });

    it('calls fetch when token > 2 chars', () => {
      const spy = spyOn(srv, 'fetchMovies');

      component.onSearchCriteriaChanged('banana');

      expect(spy).toHaveBeenCalled();
    });
  });
});
