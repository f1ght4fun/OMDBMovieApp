import { InjectionToken } from '@angular/core';
import { MovieListOptionsModel } from './../models/movie-list-options.model';

export const MOVIE_LIST_OPTIONS_TOKEN = new InjectionToken<MovieListOptionsModel[]>('movie-list-options_token');
