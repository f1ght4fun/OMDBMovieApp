import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoggerTestingModule } from 'ngx-logger/testing';
import { of } from 'rxjs';
import { ConfigService } from 'src/app/config/services/config.service';
import { SafeUrlPipe } from 'src/app/utils/pipes/safe-url/safe-url.pipe';
import { fakeAsyncFinalizer } from './../../../utils/testing/fakeAsyncFinalizer.testing-util';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, LoggerTestingModule],
      declarations: [AppComponent, SafeUrlPipe],
      providers: [
        {
          provide: ConfigService,
          useValue: {
            Config$: of({ themeUrl: 'assets/themes/default.css' })
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should set localization assets when auth changes', fakeAsync(() => {
    let result;
    component.themeUrl$.subscribe(x => (result = x));

    tick();

    expect(result).not.toBeUndefined();

    fakeAsyncFinalizer();
  }));
});
