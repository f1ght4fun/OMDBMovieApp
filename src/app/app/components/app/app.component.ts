import { ChangeDetectionStrategy, Component } from '@angular/core';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { ConfigService } from 'src/app/config/services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly themeUrl$ = this.configService.Config$.pipe(pluck('themeUrl'), distinctUntilChanged());

  constructor(private configService: ConfigService) {}
}
