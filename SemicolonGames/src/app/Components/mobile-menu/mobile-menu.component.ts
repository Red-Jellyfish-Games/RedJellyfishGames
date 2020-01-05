import { Component, OnInit, Output } from '@angular/core';
import { ModulesList } from '../../Data/menu';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {

  modulesList: Array<any>;

  constructor() {
    this.modulesList = ModulesList;
  }

  ngOnInit() {
  }

  closeMenu() {

  }
}
