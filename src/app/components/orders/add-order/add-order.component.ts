import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Item } from 'src/app/model/item.model';
import { ItemService } from 'src/app/services/item.service';
import { uuid } from 'uuid';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  id: string;
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
      id: uuid.v4(),
      itemId: this.itemId,
      quantity: this.quantity,
      complete: false,
      stockMovements: []
    };
    console.log(order);
    this.orderService.createOrder(order);
  }
}
