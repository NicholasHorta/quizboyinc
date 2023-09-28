//!! Setup of Angular Applications


//. TSCONFIG.JSON
//> Replace baseUrl to be 'src'
//> Now we can add additional paths which make out imports seamless
//:
//> Adding resolveJsonModule & esModuleInterop will help us work with Dictionaries


//. ENVIRONMENTS
//> An app should have at least DEV & PROD env files - env/env.prod.ts + env.dev.ts
//> Go to angular.json and change build/outputPath - and change to dist/
//@ Do this because we only have one project, after successful build, all build files will go directly to the DIST folder
//. Package.json
//> Now we can apply these processes to our scripts object



//. FIREBASE
//> We should have different database configs for prod and dev to avoid data corruption during development
//+ import {AngularFireModule} from '@angular/fire/compat'
//+ import {AuthModule} from '@angular/fire/auth'
//+ import {FirestoreModule} from '@angular/fire/firestore'

//+ imports: [
//+   BrowserModule,
//+   AppRoutingModule,
//+   AuthModule,
//+   FirestoreModule,
//+   AngularFireModule.initializeApp(environment.firebase),
//+ ]

//> Then to test it's working, go to your app component and sub - in App component
//+ ngOnInit() {
//+   this.ngFirestore
//+   .collection('test')
//+   .doc('Dqf3bCYGHWCFmgcSG1Nb')
//+   .get()
//+   .subscribe((i) => console.log('Data request: ', i.data()));
//+ }

//. ANGULAR.JSON
//> Move architect > build > options > "BuildOptimizer" & "Optimization" to production as this is not needed in development
