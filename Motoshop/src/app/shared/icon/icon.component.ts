import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'mot-icon',
  standalone: true,
  imports: [MatIconModule],
  styles: `
    .mot-icon {
      font-size: 15px;
      width: 15px;
      height: 15px;
    }
  `,
  template: `
  <mat-icon
    class="mot-icon"
    aria-hidden="false"
    aria-label="material icon"
    [class.white]="isWhite"
    [fontIcon]="name"
  />
  `,
})
export class IconComponent {
  @Input()
  public name = 'home'

  @Input()
  public isWhite = false;
}
