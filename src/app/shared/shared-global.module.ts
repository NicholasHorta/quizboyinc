import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/buttons/button/button.component';
import { InputComponent } from './components/controls/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AComponent } from './components/a/a.component';


const components = [
  ButtonComponent,
  InputComponent,
  AComponent
]

@NgModule({
  declarations: [],
  imports: [
    ...components,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ...components,
    ReactiveFormsModule
  ]
})
export class SharedGlobalModule { }
