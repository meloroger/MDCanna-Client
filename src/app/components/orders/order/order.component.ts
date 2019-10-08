import { Component, Input } from '@angular/core';
import { Order } from 'src/app/model/order.model';
import { Router } from '@angular/router';
import { OrderFacade } from 'src/app/facades/order.facade';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  showUpdate = false;
  showStockMovements = false;
  @Input() order: Order;

  constructor(private orderFacade: OrderFacade) {}

  onDeleteOrder(id: string) {
    this.orderFacade.deleteOrder(id);
  }

  closeExpanded() {
    this.showUpdate = false;
    this.showStockMovements = false;
  }

  toggleUpdateOrder() {
    this.showUpdate = !this.showUpdate;
  }

  toggleStockMovements() {
    this.showStockMovements = !this.showStockMovements;
  }
}
