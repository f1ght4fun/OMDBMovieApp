import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject, timer } from 'rxjs';
import { debounce, distinctUntilChanged, skip, tap } from 'rxjs/operators';
import { ConfigService } from './../../../config/services/config.service';

@UntilDestroy()
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBoxComponent implements OnInit {
  private searchTokenSubject = new BehaviorSubject<string>('');

  get SearchToken(): string {
    return this.searchTokenSubject.getValue();
  }
  set SearchToken(value: string) {
    this.searchTokenSubject.next(value);
  }

  @Output() searchCriteriaChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.searchTokenSubject
      .pipe(
        skip(1),
        distinctUntilChanged(),
        debounce((searchToken: string) => timer(!searchToken ? 0 : this.configService.Config?.timers?.inputDelay || 600)),
        tap(searchToken => this.searchCriteriaChanged.emit(searchToken)),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
