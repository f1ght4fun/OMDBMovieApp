import { InjectionToken, NgModule } from '@angular/core';
import * as ajv from 'ajv';
import { Ajv, Options } from 'ajv';

export function jsonSchemaValidatorFactory(config: Partial<Options> = {}): Ajv {
  return new ajv(config);
}

export { Ajv, Options } from 'ajv';
export type JsonSchemaValidatorFactoryType = typeof jsonSchemaValidatorFactory;
export const JSON_SCHEMA_VALIDATOR_FACTORY_TOKEN = new InjectionToken<JsonSchemaValidatorFactoryType>('json_schema_validator_factory');

@NgModule({
  providers: [{ provide: JSON_SCHEMA_VALIDATOR_FACTORY_TOKEN, useValue: jsonSchemaValidatorFactory }]
})
export class JsonSchemaValidatorModule {}
