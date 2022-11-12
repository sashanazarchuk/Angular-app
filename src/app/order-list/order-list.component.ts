import { Component } from '@angular/core';
import { order } from './mock-data';
import { IOrder } from './orders';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  currentItem: IOrder = {
    name: "",
    date: new Date(),
    isDelivered: false,
    products: [{ name: "", price: 0 }]
  };
  orders: IOrder[] = order;
  constructor() { }

  create(): void {
    // TODO: validations
    if (this.currentItem.name == "") {
      alert("Enter the name of the customer!");
      return;
    }
    this.orders.push({ ...this.currentItem });
  }


  done(order: IOrder): void {
    order.isDelivered = true;
  }
  remove(order: IOrder): void {
    if (confirm("Delete?")) {
      const index = this.orders.indexOf(order);
      if (index > -1) {
        this.orders.splice(index, 1);
      }
    }
  }
}