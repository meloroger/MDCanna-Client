import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  itemName: string;
  quantity: number;

  constructor(private orderService: OrderService) {}

  ngOnInit() {}

  onOrderSubmit() {
    console.log('createOrder fired off..');
    const order = {
      itemId: this.itemName,
      quantity: this.quantity
    };

    this.orderService.createOrder(order);
  }
}
