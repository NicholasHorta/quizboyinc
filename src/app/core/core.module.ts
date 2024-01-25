import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AccessComponent } from './components/access/access.component';
import { CoreRoutingModule } from './core-routing.module';
import { AuthModule } from '@app/auth/auth.module';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

const components = [LogoComponent, NavigationComponent, AccessComponent];
@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, ...components, CoreRoutingModule, AuthModule, RouterModule, MatIconModule],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule {}
