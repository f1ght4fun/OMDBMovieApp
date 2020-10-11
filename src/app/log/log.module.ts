import { ModuleWithProviders, NgModule } from '@angular/core';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

@NgModule()
export class LogModule {
  static forRoot(production: boolean): ModuleWithProviders<LoggerModule> {
    return LoggerModule.forRoot({ level: !!production ? NgxLoggerLevel.OFF : NgxLoggerLevel.DEBUG });
  }
}
