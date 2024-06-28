import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'mot-info',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {

  @Input()
  public iconName!: string;

  @Input()
  public isWhite = false;

}
