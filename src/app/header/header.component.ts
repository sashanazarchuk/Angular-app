import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-tabmenu',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class TabmenuComponent implements OnInit {

  constructor() { }
  items: MenuItem[] = [];
  activeItem!: MenuItem;
  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: "/orders" },
      { label: 'Github', icon: 'pi pi-fw pi-github', routerLink: "/search" },
      { label: 'AddProduct', icon: 'pi pi-plus-circle', routerLink: "/add-post" }

    ];
    this.activeItem = this.items[0];
  }

}
