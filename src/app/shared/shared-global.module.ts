import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastComponent } from './components/toast/toast.component';
import { PageLocatorComponent } from './components/page-key/page-key.component';
import { ToastDirective } from './directives/toast/toast.directive';
import { DataErrorComponent } from './components/data-error/data-error.component';

const components = [ButtonComponent, DataErrorComponent];

@NgModule({
  declarations: [PageLocatorComponent],
  imports: [...components, CommonModule, ReactiveFormsModule, ToastDirective, ToastComponent],
  exports: [...components, ReactiveFormsModule]
})
export class SharedGlobalModule {}
