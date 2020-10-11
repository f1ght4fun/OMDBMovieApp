import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { fakeAsyncFinalizer } from 'src/app/utils/testing/fakeAsyncFinalizer.testing-util';
import { CONFIG_OPTIONS_TOKEN } from '../tokens/config-options.token';
import { ConfigService } from './config.service';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: CONFIG_OPTIONS_TOKEN,
          useValue: {
            themeUrl: 'banana'
          }
        }
      ]
    });

    service = TestBed.inject(ConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('props', () => {
    describe('Config$', () => {
      it('should return value', fakeAsync(() => {
        let result;

        service.Config$.subscribe(x => (result = x));

        tick();

        expect(result).not.toEqual(null);

        fakeAsyncFinalizer();
      }));
    });

    describe('Config', () => {
      it('should return value', fakeAsync(() => {
        tick();

        expect(service.Config).not.toEqual(null);

        fakeAsyncFinalizer();
      }));
    });
  });
});
