import { Directive } from '@angular/core';

@Directive({
  selector: '[quizDarkMode]'
})
export class DarkModeDirective {

  constructor() { }
  // Check if tailwind has a dark mode class
}
