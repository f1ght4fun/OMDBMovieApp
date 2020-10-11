import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { MovieModel } from '../../models/movie.model';
import { MovieListService } from './../../services/movie-list.service';

@UntilDestroy()
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieListComponent {
  @HostBinding('class') classes = 'w-75 h-75 d-flex flex-column align-items-stretch';

  constructor(private movieListService: MovieListService) {}

  readonly movies$: Observable<MovieModel[]> = this.movieListService.movies$;
  readonly loading$: Observable<boolean> = this.movieListService.fetchingInProgress$;

  trackByFn = (idx: number, movie: { id?: string }): string | number => movie?.id || idx;

  onSearchCriteriaChanged = (searchToken: string): void => {
    searchToken.length > 2 ? this.movieListService.fetchMovies(searchToken) : this.movieListService.clearResults();
  }
}
