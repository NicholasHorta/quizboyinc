import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './shared/logo/logo.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, LogoComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class CoreModule {}
