import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/controllers/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastComponent } from './components/toast/toast.component';
import { DarkModeDirective } from './directives/dark-mode.directive';
import { PageLocatorComponent } from './components/page-key/page-key.component';


const components = [
  ButtonComponent,
  InputComponent,
]

@NgModule({
  declarations: [
    ToastComponent,
    DarkModeDirective,
    PageLocatorComponent
  ],
  imports: [
    ...components,
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    ...components,
    ReactiveFormsModule
  ]
})
export class SharedGlobalModule { }
