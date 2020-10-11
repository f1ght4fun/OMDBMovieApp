import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { NGXLogger } from 'ngx-logger';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { OmDBSearchModel } from '../models/omdb.model';
import { movieListSchema } from '../schema/movie-list.schema';
import { ConfigService } from './../../config/services/config.service';
import { JsonSchemaValidatorService } from './../../json-schema-validator/services/json-schema-validator.service';
import { MovieListOptionsModel } from './../models/movie-list-options.model';
import { MovieModel } from './../models/movie.model';
import { OmDBEntryModel } from './../models/omdb.model';
import { MOVIE_LIST_OPTIONS_TOKEN } from './../tokens/movie-list-options.token';

@UntilDestroy()
@Injectable()
export class MovieListService {
  private readonly movieList$$ = new BehaviorSubject<MovieModel[]>([]);

  readonly movies$: Observable<MovieModel[]> = this.movieList$$.asObservable();
  readonly fetchingInProgress$: Observable<boolean> = this.movies$.pipe(map(col => !col));

  constructor(
    @Inject(MOVIE_LIST_OPTIONS_TOKEN) private movieListOptions: MovieListOptionsModel,
    private configService: ConfigService,
    private validatorService: JsonSchemaValidatorService,
    private http: HttpClient,
    private logger: NGXLogger
  ) {}

  clearResults = (): void => this.movieList$$.next([]);

  fetchMovies = (searchToken: string): void => {
    this.movieList$$.next(undefined);

    this.http
      .get<OmDBSearchModel>(this.configService.Config?.movieApi?.omdbUrl, {
        params: {
          apikey: this.configService.Config?.movieApi?.omdbApiKey,
          s: searchToken
        }
      })
      .pipe(
        this.validatorService.validateOperator(movieListSchema),
        map(({ Search }) => Search.slice(0, this.movieListOptions.moviesCnt + 1).map(item => this.transformModel(item))),
        tap(movieItems => this.movieList$$.next(movieItems)),
        catchError(error => {
          this.logger.error(error);
          this.clearResults();

          return EMPTY;
        })
      )
      .subscribe();
  }

  private transformModel = (item: OmDBEntryModel): MovieModel => {
    return {
      id: item.imdbID,
      title: item.Title,
      year: item.Year,
      link: `${this.configService.Config?.movieApi?.imdbUrl}${item.imdbID}`,
      pic: item.Poster === 'N/A' ? undefined : item.Poster
    };
  }
}
