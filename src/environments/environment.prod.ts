export const environment = {
  production: true,
  timers: {
    times: 2,
    delay: 1000,
    extendedDelay: 60000,
    inputDelay: 600
  },
  urls: {
    config: 'api/config.json',
    static: 'api/static.json',
    defaultTheme: 'assets/theme/default.css'
  },
  routes: {
    auth: ['/', 'auth'],
    main: ['/']
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
    maxAge: 25, // Retains last 25 states
    logOnly: true
  }
};
