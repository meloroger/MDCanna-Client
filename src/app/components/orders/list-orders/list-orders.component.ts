import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Order } from 'src/app/model/order.model';
import { OrderFacade } from 'src/app/facades/order.facade';
import { Observable } from 'rxjs';
import { OrderState } from 'src/app/facades/state/order-state.interface';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {
  orderVM$: Observable<OrderState> = this.orderFacade.vm$;

  constructor(private orderFacade: OrderFacade) {}

  ngOnInit() {}

  selectOrder(order: Order) {
    return this.orderFacade.selectOrder(order);
  }
}
