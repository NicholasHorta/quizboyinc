//. npm install -g firebase-tools
//. firebase login
//. ng add @angular/fire
//> firestore
//> authentication
//. Select or create a project
//. Create new app

/// app module
//+ import {environment} from '@src/environments/environment'
//+ import {initializeApp, provideFirebaseApp} from '@angular/fire/app'
//+ import {provideAuth, getAuth} from '@angular/fire/auth'
//+ import {provideFirestore, getFirestore} from '@angular/fire/firestore'

//+ provideFirebaseApp(() => initializeApp(environment.firebase)),
//+ provideAuth(() => getAuth()),
//+ provideFirestore(() => getFirestore())

//// environment
//+ export const environment = {
//+   firebase: {
//+     apiKey: "",
//+     authDomain: "",
//+     projectId: "",
//+     storageBucket: "",
//+     messagingSenderId: "",
//+     appId: ""
//+   },
//+   production: false
//+ }

//. firebase init
//> Authentication
//> Firestore
//> Functions (optional)

//: Go setup the fucking file on firebase
//> production mode
//> Set zone


//. firebase init - again
//> Firestore
//> Functions
//> Emulators

//@ What file should be used for Firestore Rules? firestore.rules
//@ What file should be used for Firestore indexes? firestore.indexes.json

//: Emulators Setup
//@  Which Firebase emulators do you want to set up? Press Space to select emulators, then Enter to confirm your choices. Authentication Emulator, Functions Emulator, Firestore Emulator
//@  Which port do you want to use for the auth emulator? 9099
//@  Which port do you want to use for the functions emulator? 5001
//@  Which port do you want to use for the firestore emulator? 8080
//@  Would you like to enable the Emulator UI? Yes
//@  Which port do you want to use for the Emulator UI (leave empty to use any available port)?
//@  Would you like to download the emulators now? Yes


/// Use the following when we want to deploy changes to a specific file
//. firebase depoly --only firestore:rules

//. Set useEmulators in environment
//> false in prod
//> true in dev
/// VERY IMPORTANT - in dev, add DEMO- to projectId value
//+ export const environment = {
//+   firebase: {
//+     apiKey: "AIzaSyAYJ4DwJA4CWaBJys_JvHyDrQAcE5wQUoE",
//+     authDomain: "quizboyinc.firebaseapp.com",
//+     projectId: "demo-quizboyinc",
//+     storageBucket: "quizboyinc.appspot.com",
//+     messagingSenderId: "580828636844",
//+     appId: "1:580828636844:web:4f9eaec498dcc2a5762109"
//+   },
//+   production: false,
//+   name: 'development',
//+   useEmulators: true
//+ }


/// Go to root module now and change configurations

//+ import { NgModule } from '@angular/core';
//+ import { BrowserModule } from '@angular/platform-browser';
//+ import { AppComponent } from './app.component';
//+ import { AppRoutingModule } from './app-routing.module';
//+ import {environment} from '@src/environments/environments.dev'
//+ import {initializeApp, provideFirebaseApp, getApp} from '@angular/fire/app'
//+ import {provideAuth, getAuth, connectAuthEmulator} from '@angular/fire/auth'
//+ import {provideFirestore, getFirestore, initializeFirestore, connectFirestoreEmulator, Firestore} from '@angular/fire/firestore'

//+ @NgModule({
//+   declarations: [
//+     AppComponent
//+   ],
//+   imports: [
//+     BrowserModule,
//+     AppRoutingModule,
//+     provideFirebaseApp(() => initializeApp(environment.firebase)),
//+     provideFirestore(() => {
//+       let firestore: Firestore;
//+       if(environment.useEmulators){
//+         // Long polling required for cypress ??
//+         firestore = initializeFirestore(getApp(), {
//+           experimentalForceLongPolling: true
//+         });
//+         connectFirestoreEmulator(firestore, 'localhost', 8080); <-- FIRESTORE EMULATOR ADDRESS
//+       } else {
//+         firestore = getFirestore()
//+       }
//+       return firestore;
//+     }),
//+     provideAuth(() => {
//+       const auth = getAuth();
//+       if(environment.useEmulators){
//+         connectAuthEmulator(auth, 'http://localhost:9099', { <-- FIRESTORE AUTH ADDRESS
//+           disableWarnings: true
//+         })
//+       }
//+       return auth;
//+     }),
//+     provideFunctions(() => {
//+       const functions = getFunctions();
//+       if(environment.useEmulators){
//+         connectFunctionsEmulator(functions, 'localhost', 5001)
//+       }
//+       return functions
//+     })
//+   ],
//+   providers: [],
//+   bootstrap: [AppComponent]
//+ })
//+ export class AppModule { }


//> Finally, set up a custom commant to run your app easily
//+ "scripts": {
//+   "ng": "ng",
//+   "start": "ng serve",
//+   "build": "ng build",
//+   "watch": "ng build --watch --configuration development",
//+   "test": "ng test",
//+   "quiz": "ng serve --c=development",
//.   "quiz:em": "firebase emulators:exec --project=demo-quizboyinc --ui 'ng serve --c=development'",
//+   "build-dev": "ng build --c=development",
//+   "quiz-prod": "ng serve --c=production",
//+   "build-prod": "ng build --c=production"
//+ },
