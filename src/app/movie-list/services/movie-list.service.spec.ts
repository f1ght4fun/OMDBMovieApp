import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { LoggerTestingModule } from 'ngx-logger/testing';
import { of, throwError } from 'rxjs';
import { ConfigService } from 'src/app/config/services/config.service';
import { JsonSchemaValidatorModule } from 'src/app/json-schema-validator/json-schema-validator.module';
import { fakeAsyncFinalizer } from 'src/app/utils/testing/fakeAsyncFinalizer.testing-util';
import { MOVIE_LIST_OPTIONS_TOKEN } from '../tokens/movie-list-options.token';
import { MovieListService } from './movie-list.service';

describe('MovieListService', () => {
  let service: MovieListService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoggerTestingModule, HttpClientTestingModule, JsonSchemaValidatorModule],
      providers: [
        MovieListService,
        {
          provide: MOVIE_LIST_OPTIONS_TOKEN,
          useValue: {
            moviesCnt: 2
          }
        },
        {
          provide: ConfigService,
          useValue: {
            Config: {
              movieApi: {
                imdbUrl: 'banana',
                omdbUrl: 'banana',
                omdbApiKey: 'banana'
              }
            }
          }
        }
      ]
    });

    service = TestBed.inject(MovieListService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('functions', () => {
    describe('fetchMovies ', () => {
      it('should keep loading and in case of error clear results', fakeAsync(() => {
        let result;
        service.fetchingInProgress$.subscribe(val => (result = val));

        spyOn(http, 'get').and.returnValue(throwError('banana'));

        service.fetchMovies('banana');

        tick();

        expect(result).toBeFalse();

        fakeAsyncFinalizer();
      }));

      it('should break in case of validation error', fakeAsync(() => {
        let result;
        service.fetchingInProgress$.subscribe(val => (result = val));

        spyOn(http, 'get').and.returnValue(of({ banana: 'banana' }));

        service.fetchMovies('banana');

        tick();

        expect(result).toBeFalse();

        fakeAsyncFinalizer();
      }));

      it('should populate collection of first 3 elements from search result', fakeAsync(() => {
        let result;
        service.fetchingInProgress$.subscribe(val => (result = val));

        let col;
        service.movies$.subscribe(val => (col = val));

        spyOn(http, 'get').and.returnValue(
          of({
            Search: [
              { imdbID: 'tt293929', Title: 'Blade', Year: '1998' },
              { imdbID: 'tt293929', Title: 'Blade2', Year: '2000', Poster: 'N/A' },
              { imdbID: 'tt293929', Title: 'Blade3', Year: '2005' },
              { imdbID: 'tt293929', Title: 'Blade4', Year: '2020' }
            ]
          })
        );

        service.fetchMovies('banana');

        tick();

        expect(result).toBeFalse();
        expect(col).not.toBeUndefined();
        expect(col.length).toEqual(3);
        expect(col[1].title).toEqual('Blade2');

        fakeAsyncFinalizer();
      }));
    });
  });
});
