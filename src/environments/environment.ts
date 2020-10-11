// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  timers: {
    times: 2,
    delay: 1000,
    extendedDelay: 60000,
    inputDelay: 600
  },
  themeUrl: 'assets/themes/default.css',
  movieApi: {
    omdbUrl: 'http://www.omdbapi.com/',
    imdbUrl: 'https://www.imdb.com/title/',
    omdbApiKey: '<INSERT YOUR OMDB KEY>'
  },
  translationConfig: {
    defaultLanguage: 'en-US'
  },
  storeConfig: {
    runtimeChecks: {
      strictStateImmutability: true,
      strictActionImmutability: true,
      strictStateSerializability: true,
      strictActionSerializability: true,
      strictActionWithinNgZone: true,
      strictActionTypeUniqueness: true
    }
  },
  storeDevToolsConfig: {
    maxAge: 100, // Retains last 100 states
    logOnly: false
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
