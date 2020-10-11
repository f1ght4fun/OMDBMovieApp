import { ModuleWithProviders, NgModule } from '@angular/core';
import { ConfigOptionsModel } from './models/config-options.model';
import { ConfigService } from './services/config.service';
import { CONFIG_OPTIONS_TOKEN } from './tokens/config-options.token';

@NgModule()
export class ConfigModule {
  static forRoot(config: ConfigOptionsModel): ModuleWithProviders<ConfigModule> {
    return {
      ngModule: ConfigModule,
      providers: [
        { provide: CONFIG_OPTIONS_TOKEN, useValue: config }, //
        ConfigService
      ]
    };
  }
}
