export interface ConfigOptionsModel {
  themeUrl: string;
  movieApi: Partial<{ omdbUrl: string; imdbUrl: string; omdbApiKey: string }>;
  timers: Partial<{ delay: number; inputDelay: number; extendedDelay: number; times: number }>;
}
