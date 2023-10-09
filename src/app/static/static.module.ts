import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticRoutingModule } from './static-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    StaticRoutingModule,
    AboutComponent,
    ContactComponent
  ],
})
export class StaticModule { }
