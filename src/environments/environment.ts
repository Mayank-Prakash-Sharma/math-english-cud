// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  //My Firebase Config details
  firebaseConfig: {
    apiKey: "AIzaSyBLMb3RuazZLvHfGPAzttHFxCv-GxD1804",
    authDomain: "my-demo-project-bb33e.firebaseapp.com",
    databaseURL: "https://my-demo-project-bb33e.firebaseio.com",
    projectId: "my-demo-project-bb33e",
    storageBucket: "my-demo-project-bb33e.appspot.com",
    messagingSenderId: "347316228751",
    appId: "1:347316228751:web:aa765f6a91deaad77796fa",
    measurementId: "G-L2Q2HKJFTV"
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
