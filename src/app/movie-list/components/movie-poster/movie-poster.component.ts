import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { MovieModel } from '../../models/movie.model';

@UntilDestroy()
@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviePosterComponent {
  @Input() movie: MovieModel;
}
