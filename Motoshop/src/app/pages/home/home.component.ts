import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { CardComponent } from '../../shared/card/card.component';
import { ListComponent } from '../../shared/list/list.component';

@Component({
  selector: 'mot-home',
  standalone: true,
  imports: [IconComponent, CardComponent, ListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('video')
  protected videoElement!: ElementRef

  ngAfterViewInit(): void {
    if (this.videoElement.nativeElement) {
      this.videoElement.nativeElement.muted = true;
      this.videoElement.nativeElement.play()
    }
  }
}
