import { Component, OnInit, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CarouselItem } from '../../Interfaces/Carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  imageCarousel: Array<CarouselItem> = [{ title: "Beautiful graphics", imageURL: "assets/icerunners/preview1.png" },
  { title: "Beautiful graphics 2", imageURL: "assets/icerunners/preview2.png" }];
  index = 0;
  manuallyTouched: BehaviorSubject<boolean>;
  playPauseIcon: string;

  constructor() {
    setInterval(() => { this.SlideShow() }, 3 * 1000);

    this.manuallyTouched = new BehaviorSubject<boolean>(false);
    this.manuallyTouched.asObservable().subscribe(value => this.PlayPause());
    this.manuallyTouched.next(false);
    this.PlayPause();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {

    if (event.key === 'ArrowLeft') {
      this.previous();
      this.manuallyTouched.next(true);
    }
    else if (event.key === 'ArrowRight') {
      this.next();
      this.manuallyTouched.next(true);
    }
  }

  next(buttonClick: boolean = true) {
    (this.index < this.imageCarousel.length - 1) ? this.index++ : this.index = 0;

    if (buttonClick) {
      this.manuallyTouched.next(true);
    }
  }

  previous(buttonClick: boolean = true) {
    (this.index == 0) ? this.index = this.imageCarousel.length - 1 : this.index--;

    if (buttonClick) {
      this.manuallyTouched.next(true);
    }
  }

  SlideShow() {
    if (this.manuallyTouched.getValue() == false) {
      this.next(false);
    }
  }

  PlayPause() {
    this.playPauseIcon = this.manuallyTouched.getValue() == true ? "play_arrow" : "pause";
  }

  ChangeManuallyTouched() {
    this.manuallyTouched.next(!this.manuallyTouched.getValue());
  }
}