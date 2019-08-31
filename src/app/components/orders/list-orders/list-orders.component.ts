import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/model/order.model';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {
  private orders: Order[];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.populateOrders();
  }

  populateOrders() {
    this.orderService.getOrders().subscribe(
      data => {
        console.log(data);
        this.orders = data;
      },
      err => {
        console.log(err.msg);
      }
    );
  }

  deleteOrder(id: string) {
    this.orders = this.orders.filter(order => order.id !== id);

    this.orderService.deleteOrder(id).subscribe();
  }

  updateOrder(updateOrder: Order) {
    console.log('list-orders..', updateOrder);
    this.orders.forEach(order => {
      if (updateOrder.id === order.id) {
        /** Todo add other fields for update */
        order.itemId = updateOrder.itemId;
        order.quantity = updateOrder.quantity;
      }
    });
    console.log(this.orders);
    try {
      this.orderService.updateOrder(updateOrder).subscribe();
    } catch (err) {
      console.log(err);
    }
  }
}
