import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from 'src/app/model/order.model';
import { Item } from 'src/app/model/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {
  @Input() order: Order;
  @Output() updateOrder: EventEmitter<Order> = new EventEmitter();
  items: Item[];
  itemId: string;
  quantity: number;

  constructor(private itemService: ItemService) {
    this.itemService.fetchAllItems().subscribe(data => (this.items = data));
  }

  ngOnInit() {}

  onUpdateOrder() {
    const order = {
      id: this.order.id,
      itemId: this.itemId,
      quantity: this.quantity
    };

    console.log(order);
    this.updateOrder.emit(order);
  }
}
