import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { Order } from 'src/app/model/order.model';
import { Item } from 'src/app/model/item.model';
import { OrderFacade } from 'src/app/facades/order.facade';
import { ItemFacade } from 'src/app/facades/item.facade';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdateOrderComponent implements OnInit {
  order: Order;
  items$ = this.itemFacade.items$;
  itemId: string;
  quantity: number;
  stockMovements: object[];

  constructor(
    private itemFacade: ItemFacade,
    private orderFacade: OrderFacade
  ) {}

  ngOnInit() {
    this.orderFacade.selectedOrder$.subscribe(order => (this.order = order));
  }

  onUpdateOrder() {
    const user = JSON.parse(localStorage.getItem('user'));
    const order = {
      id: this.order.id,
      itemId: this.itemId,
      quantity: this.quantity,
      userId: user.id,
      complete: false,
      stockMovements: this.stockMovements
    };

    console.log(order);
    this.orderFacade.updateOrder(order);
  }
}
