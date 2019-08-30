import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Item } from 'src/app/model/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  itemId: string;
  quantity: number;
  items: Item[];

  constructor(
    private orderService: OrderService,
    private itemService: ItemService
  ) {
    this.itemService.fetchAllItems().subscribe(data => (this.items = data));
  }

  ngOnInit() {}

  onOrderSubmit() {
    console.log('createOrder fired off..');
    const order = {
      itemId: this.itemId,
      quantity: this.quantity
    };
    console.log(order);
    this.orderService.createOrder(order);
  }
}
