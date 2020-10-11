import { TestBed } from '@angular/core/testing';
import * as ajv from 'ajv';
import { JsonSchemaValidatorModule, JSON_SCHEMA_VALIDATOR_FACTORY_TOKEN } from './json-schema-validator.module';

describe('JSONSchemaValidatorModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [JsonSchemaValidatorModule]
    });
  });

  describe('jsonSchemaValidatorFactory', () => {
    it('should produce a validator instance', () => {
      const factory = TestBed.inject(JSON_SCHEMA_VALIDATOR_FACTORY_TOKEN);
      const instance = factory();
      expect(instance).toBeInstanceOf(ajv);
    });
  });
});
