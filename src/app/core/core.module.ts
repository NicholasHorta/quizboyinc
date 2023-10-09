import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './shared/components/logo/logo.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { PortalComponent } from './shared/components/portal/portal.component';
import { IconComponent } from '../shared/components/icon/icon.component';


const components = [
  LogoComponent,
  NavigationComponent,
  PortalComponent
]
@NgModule({
  declarations: [HeaderComponent, FooterComponent, IconComponent],
  imports: [CommonModule, ...components],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class CoreModule {}
