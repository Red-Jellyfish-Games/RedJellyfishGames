import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})

export class AppComponent {

  mobileDevice: boolean;
  menuOpen: boolean = false;

  topPosToStartShowingButton = 100;
  showScrollToTopButton: boolean = false;

  constructor() {
    this.mobileDevice = window.innerWidth <= 845;
  }

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= this.topPosToStartShowingButton) {
      this.showScrollToTopButton = true;
    } else {
      this.showScrollToTopButton = false;
    }
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  getYear() {
    return new Date().getFullYear();
  }

  onResize(event) {
    this.mobileDevice = window.innerWidth <= 845;
  }

  openMenuOverlay(open: boolean) {
    this.menuOpen = open;
  }
}