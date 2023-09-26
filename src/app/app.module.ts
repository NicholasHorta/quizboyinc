import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {environment} from '../environments/environments.dev'
import {initializeApp, provideFirebaseApp, getApp} from '@angular/fire/app'
import {provideAuth, getAuth, connectAuthEmulator} from '@angular/fire/auth'
import {provideFunctions, getFunctions, connectFunctionsEmulator} from '@angular/fire/functions'
import {provideFirestore, getFirestore, initializeFirestore, connectFirestoreEmulator, Firestore} from '@angular/fire/firestore'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => {
      let firestore: Firestore;
      if(environment.useEmulators){
        // Long polling required for cypress ??
        firestore = initializeFirestore(getApp(), {
          experimentalForceLongPolling: true
        });
        connectFirestoreEmulator(firestore, 'localhost', 8080);
      } else {
        firestore = getFirestore()
      }
      return firestore;
    }),
    provideAuth(() => {
      const auth = getAuth();
      if(environment.useEmulators){
        connectAuthEmulator(auth, 'http://localhost:9099', {
          disableWarnings: true
        })
      }
      return auth;
    }),
    provideFunctions(() => {
      const functions = getFunctions();
      if(environment.useEmulators){
        connectFunctionsEmulator(functions, 'localhost', 5001)
      }
      return functions
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
