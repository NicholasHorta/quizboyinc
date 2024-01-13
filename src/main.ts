import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { QuizRootModule } from './app/quiz-root.module';


platformBrowserDynamic().bootstrapModule(QuizRootModule)
  .catch(err => console.error(err));
