import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { QuizModule } from './app/quiz.module';


platformBrowserDynamic().bootstrapModule(QuizModule)
  .catch(err => console.error(err));
