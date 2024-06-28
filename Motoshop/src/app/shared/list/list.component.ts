import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'mot-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

}
