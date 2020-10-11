import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfigModule } from 'src/app/config/config.module';
import { JsonSchemaValidatorModule } from 'src/app/json-schema-validator/json-schema-validator.module';
import { LogModule } from 'src/app/log/log.module';
import { SafeUrlPipe } from 'src/app/utils/pipes/safe-url/safe-url.pipe';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';

@NgModule({
  declarations: [AppComponent, SafeUrlPipe],
  imports: [
    BrowserModule, //
    BrowserAnimationsModule,
    HttpClientModule,
    //////////////////////////////////////////////////////////////////////////////////////////
    JsonSchemaValidatorModule,
    LogModule.forRoot(environment.production),
    //////////////////////////////////////////////////////////////////////////////////////////
    ConfigModule.forRoot({ themeUrl: environment.themeUrl, movieApi: environment.movieApi, timers: environment.timers }),
    //////////////////////////////////////////////////////////////////////////////////////////
    AppRoutingModule,
    //////////////////////////////////////////////////////////////////////////////////////////
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
