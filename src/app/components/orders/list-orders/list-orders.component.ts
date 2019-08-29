import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/model/order.model';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {
  orders: Order[];

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
}
