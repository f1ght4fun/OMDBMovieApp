import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ConfigService } from 'src/app/config/services/config.service';
import { fakeAsyncFinalizer } from './../../../utils/testing/fakeAsyncFinalizer.testing-util';
import { SearchBoxComponent } from './search-box.component';

describe('SearchBoxComponent', () => {
  let component: SearchBoxComponent;
  let fixture: ComponentFixture<SearchBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBoxComponent],
      providers: [
        {
          provide: ConfigService,
          useValue: {
            Config: {
              timers: {
                inputDelay: 200
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBoxComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('subscription', () => {
    beforeEach(() => {
      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        declarations: [SearchBoxComponent],
        providers: [
          {
            provide: ConfigService,
            useValue: {
              Config: {
                timers: {
                  inputDelay: 200
                }
              }
            }
          }
        ]
      });
    });

    it('should emit when token has changed after 200 ms', fakeAsync(() => {
      TestBed.compileComponents();

      fixture = TestBed.createComponent(SearchBoxComponent);
      component = fixture.componentInstance;

      fixture.detectChanges();

      const spy = spyOn(component.searchCriteriaChanged, 'emit');

      component.SearchToken = 'banana';
      tick(200);

      expect(spy).toHaveBeenCalled();

      fakeAsyncFinalizer();
    }));

    it('should emit when token has changed after 600 ms since no provider', fakeAsync(() => {
      TestBed.overrideProvider(ConfigService, { useValue: { Config: null } });

      TestBed.compileComponents();

      fixture = TestBed.createComponent(SearchBoxComponent);
      component = fixture.componentInstance;

      fixture.detectChanges();

      const spy = spyOn(component.searchCriteriaChanged, 'emit');

      component.SearchToken = 'banana';
      tick(600);

      expect(spy).toHaveBeenCalled();

      fakeAsyncFinalizer();
    }));

    it('should emit when token has changed and empty without timer', fakeAsync(() => {
      TestBed.overrideProvider(ConfigService, { useValue: { Config: null } });

      TestBed.compileComponents();

      fixture = TestBed.createComponent(SearchBoxComponent);
      component = fixture.componentInstance;

      fixture.detectChanges();

      const spy = spyOn(component.searchCriteriaChanged, 'emit');

      component.SearchToken = null;
      tick();

      expect(spy).toHaveBeenCalled();

      fakeAsyncFinalizer();
    }));
  });
});
