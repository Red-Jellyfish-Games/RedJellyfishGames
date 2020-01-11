import { Component, HostListener } from '@angular/core';
import { CommunicationService } from './Services/communication.service';
import { Subscription } from 'rxjs';

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
  mobileMenuOpen: boolean = false;

  topPosToStartShowingButton = 100;
  showScrollToTopButton: boolean = false;

  subscription: Subscription;

  constructor(private communicationService: CommunicationService) {
    this.subscription = this.communicationService.mobileMenuStream$.subscribe(
      open => {
        this.mobileMenuOpen = open;
      }
    );

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

  ngAfterViewInit() {

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

  openMobileMenu() {
    this.communicationService.ChangeMobileMenu(true);
  }
}