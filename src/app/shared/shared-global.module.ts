import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/buttons/button/button.component';
import { InputComponent } from './components/controls/input/input.component';
import {  ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonComponent,
    InputComponent,
    ReactiveFormsModule
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    ReactiveFormsModule

  ]
})
export class SharedGlobalModule { }
