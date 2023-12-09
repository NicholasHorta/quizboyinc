import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Paths } from '@app/models/shared/global.models';

const routes: Routes = [
  {path: Paths.ABOUT, component: AboutComponent},
  {path: Paths.CONTACT, component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule { }
