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

  onDeleteOrder(id: string): void {
    this.orderFacade.deleteOrder(id);
  }

  closeExpanded(): void {
    this.showUpdate = false;
    this.showStockMovements = false;
  }

  toggleUpdateOrder(): void {
    this.showUpdate = !this.showUpdate;
  }

  toggleStockMovements(): void {
    this.showStockMovements = !this.showStockMovements;
  }
}
