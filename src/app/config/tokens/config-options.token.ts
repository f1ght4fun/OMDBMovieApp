import { InjectionToken } from '@angular/core';
import { ConfigOptionsModel } from '../models/config-options.model';

export const CONFIG_OPTIONS_TOKEN = new InjectionToken<ConfigOptionsModel>('config_options');
