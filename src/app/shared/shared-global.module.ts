import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastComponent } from './components/toast/toast.component';
import { ToastDirective } from './directives/toast/toast.directive';
import { DataErrorComponent } from './components/data-error/data-error.component';

const components = [ButtonComponent, DataErrorComponent];

@NgModule({
  declarations: [],
  imports: [...components, CommonModule, ReactiveFormsModule, ToastDirective, ToastComponent],
  exports: [...components, ReactiveFormsModule]
})
export class SharedGlobalModule {}
