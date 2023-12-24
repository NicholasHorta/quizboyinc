import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { QuizComponent } from './quiz.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { devEnvironment } from '../environments/environment.dev';
import { AngularFireModule } from '@angular/fire/compat';
import {
  AngularFireAuthModule,
  USE_EMULATOR as USE_AUTH_EMULATOR
} from '@angular/fire/compat/auth';
import {
  AngularFirestoreModule,
  USE_EMULATOR as USE_FIRESTORE_EMULATOR
} from '@angular/fire/compat/firestore';
import {
  AngularFireFunctionsModule,
  USE_EMULATOR as USE_FUNCTIONS_EMULATOR
} from '@angular/fire/compat/functions';
import { CoreModule } from './core/core.module';
import { SharedGlobalModule } from './shared/shared-global.module';
import { StaticModule } from './static/static.module';
import { ProfileModule } from './components/profile/profile.module';
import { QuizShowsModule } from './components/quiz-shows/quiz-shows.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastComponent } from './shared/components/toast/toast.component';

const standaloneBsComponents = [ToastComponent];
const bsModules = [
  CoreModule,
  StaticModule,
  ProfileModule,
  QuizShowsModule,
  SharedGlobalModule,
  QuizRoutingModule
];

@NgModule({
  declarations: [QuizComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(devEnvironment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireFunctionsModule,
    HttpClientModule,
    ...bsModules,
    ...standaloneBsComponents
  ],
  providers: [
    {
      provide: USE_AUTH_EMULATOR,
      useValue: devEnvironment.useEmulators ? ['http://localhost:9099', 9099] : undefined
    },
    {
      provide: USE_FIRESTORE_EMULATOR,
      useValue: devEnvironment.useEmulators ? ['localhost', 8080] : undefined
    },
    {
      provide: USE_FUNCTIONS_EMULATOR,
      useValue: devEnvironment.useEmulators ? ['localhost', 5001] : undefined
    }
  ],
  bootstrap: [QuizComponent]
})
export class QuizModule {}
