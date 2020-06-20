import { Component } from '@angular/core';
import { ModulesList } from '../../Data/menu';
import { CommunicationService } from '../../Services/communication.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent {

  modulesList: Array<any>;
  public open: boolean = false;
  subscription: Subscription;

  constructor(private communicationService: CommunicationService, private router: Router) {
    this.modulesList = ModulesList;
    this.subscription = this.communicationService.mobileMenuStream$.subscribe(
      open => {
        this.open = open;
      });
  }

  closeMenu(children: boolean, routerLink: string) {
    if (children == false) {
      this.router.navigate([routerLink]);
      this.open = false;
      this.communicationService.ChangeMobileMenu(false);
    }
  }
}
