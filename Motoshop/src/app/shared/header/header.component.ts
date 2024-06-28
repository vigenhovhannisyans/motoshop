import { Component, ViewEncapsulation } from '@angular/core';
import { Routers } from '../../core/constant/router.constant';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { InfoComponent } from '../info/info.component';
import { RouterModule } from '@angular/router';
import { ScrollDirective } from '../../directives/scroll.directive';

@Component({
  selector: 'mot-header',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent, InfoComponent, ScrollDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected readonly routers = Routers;

  protected showNavbar = false;

  protected toggleNavbar(): void {
    this.showNavbar = !this.showNavbar;
  }
}
