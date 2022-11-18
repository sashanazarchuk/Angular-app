import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-tabmenu',
  templateUrl: './tabmenu.component.html',
  styleUrls: ['./tabmenu.component.css']
})
export class TabmenuComponent implements OnInit {

  constructor() { }
  items: MenuItem[] = [];
  activeItem!: MenuItem;
  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: "/orders" },
      { label: 'Github', icon: 'pi pi-fw pi-github', routerLink: "/search" },
      
    ];
    this.activeItem = this.items[0];
  }

}
