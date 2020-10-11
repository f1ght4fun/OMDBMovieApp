import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConfigOptionsModel } from '../models/config-options.model';
import { CONFIG_OPTIONS_TOKEN } from '../tokens/config-options.token';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configSubject: BehaviorSubject<ConfigOptionsModel> = new BehaviorSubject(null);

  get Config(): ConfigOptionsModel {
    return this.configSubject.getValue();
  }

  get Config$(): Observable<ConfigOptionsModel> {
    return this.configSubject.asObservable();
  }

  constructor(@Inject(CONFIG_OPTIONS_TOKEN) private configOptions: ConfigOptionsModel) {
    this.configSubject.next(this.configOptions);
  }
}
