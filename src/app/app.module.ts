import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { devEnvironment } from '../environments/environment.dev';
import { AngularFireModule } from '@angular/fire/compat';
import {
  AngularFireAuthModule,
  USE_EMULATOR as USE_AUTH_EMULATOR,
} from '@angular/fire/compat/auth';
import {
  AngularFirestoreModule,
  USE_EMULATOR as USE_FIRESTORE_EMULATOR,
} from '@angular/fire/compat/firestore';
import {
  AngularFireFunctionsModule,
  USE_EMULATOR as USE_FUNCTIONS_EMULATOR,
} from '@angular/fire/compat/functions';
import { CoreModule } from './core/core.module';




@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(devEnvironment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireFunctionsModule,
    CoreModule
  ],
  providers: [
    {
      provide: USE_AUTH_EMULATOR,
      useValue: devEnvironment.useEmulators
        ? ['http://localhost', 9099]
        : undefined,
    },
    {
      provide: USE_FIRESTORE_EMULATOR,
      useValue: devEnvironment.useEmulators
        ? ['localhost', 8080]
        : undefined,
    },
    {
      provide: USE_FUNCTIONS_EMULATOR,
      useValue: devEnvironment.useEmulators
        ? ['localhost', 5001]
        : undefined,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
