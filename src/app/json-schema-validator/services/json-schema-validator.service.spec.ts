import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import * as ajv from 'ajv';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { JsonSchemaValidatorModule } from 'src/app/json-schema-validator/json-schema-validator.module';
import { fakeAsyncFinalizer } from 'src/app/utils/testing/fakeAsyncFinalizer.testing-util';
import { JsonSchemaValidatorService } from './json-schema-validator.service';

describe('JsonSchemaValidatorService', () => {
  let service: JsonSchemaValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [JsonSchemaValidatorModule]
    });
    service = TestBed.inject(JsonSchemaValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('props', () => {
    describe('Validator', () => {
      it('should return instance of ajv validator', () => {
        expect(service.Validator instanceof ajv).toBe(true);
      });

      it('should return same instance', () => {
        const v = service.Validator;
        expect(service.Validator).toBe(v);
      });
    });

    describe('Validator', () => {
      it('should return instance of ajv validator', () => {
        expect(service.ValidatorInstance instanceof ajv).toBe(true);
      });

      it('should return new instance', () => {
        const v = service.ValidatorInstance;
        expect(service.ValidatorInstance).not.toBe(v);
      });
    });

    describe('ValidatorFactory', () => {
      it('should return instance of ajv validator factory', () => {
        const f = service.ValidatorFactory;
        expect(typeof service.ValidatorFactory).toBe('function');
        expect(f() instanceof ajv).toBe(true);
      });
    });
  });

  describe('validateOperator', () => {
    it('should validate and return result', fakeAsync(() => {
      let result;

      of('hello')
        .pipe(service.validateOperator({ type: 'string' }))
        .subscribe(x => (result = x));

      tick();

      expect(result).toBe('hello');

      fakeAsyncFinalizer();
    }));

    it('should validate and throw error', fakeAsync(() => {
      const validator = service.ValidatorInstance;

      let result;

      of(12345)
        .pipe(
          service.validateOperator({ type: 'string' }, validator),
          catchError(error => of(error))
        )
        .subscribe(x => (result = x));

      tick();

      expect(result).toBe('data should be string');

      fakeAsyncFinalizer();
    }));
  });
});
