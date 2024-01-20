import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { QuizComponent } from './quiz-root.component';
import { QuizRootRoutingModule } from './quiz-root-routing.module';
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
import { SharedGlobalModule } from './shared/shared-global.module';
import { StaticModule } from './static/static.module';
import { ProfileModule } from './components/profile/profile.module';
import { QuizShowsModule } from './components/quiz-shows/quiz-shows.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastComponent } from './shared/components/toast/toast.component';
import { MatIconModule } from '@angular/material/icon';

const modals = [
  ToastComponent,
]
@NgModule({
  declarations: [QuizComponent],
  imports: [
    BrowserModule,
    QuizRootRoutingModule,
    AngularFireModule.initializeApp(devEnvironment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireFunctionsModule,
    SharedGlobalModule,
    HttpClientModule,
    CoreModule,
    StaticModule,
    ProfileModule,
    QuizShowsModule,
    ...modals,
    MatIconModule
  ],
  providers: [
    {
      provide: USE_AUTH_EMULATOR,
      useValue: devEnvironment.useEmulators
        ? ['http://localhost:9099', 9099]
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
  bootstrap: [QuizComponent],
})
export class QuizRootModule {}
