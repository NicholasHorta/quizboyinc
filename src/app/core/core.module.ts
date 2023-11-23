import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AccessComponent } from './components/access/access.component';
import { IconComponent } from '../shared/components/icon/icon.component';

const components = [LogoComponent, NavigationComponent, AccessComponent];
@NgModule({
  declarations: [HeaderComponent, FooterComponent, IconComponent],
  imports: [CommonModule, ...components],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class CoreModule {}
