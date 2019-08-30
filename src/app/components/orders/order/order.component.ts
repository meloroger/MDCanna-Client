import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from 'src/app/model/order.model';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() order: Order;
  @Output() deleteOrder: EventEmitter<Order> = new EventEmitter();
  @Output() passUpdateOrder: EventEmitter<Order> = new EventEmitter();
  showUpdate = false;

  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit() {}

  onDeleteOrder(id) {
    this.deleteOrder.emit(id);
  }

  toggleUpdateOrder() {
    this.showUpdate = !this.showUpdate;
  }

  fwdUpdateOrder(order) {
    console.log('order component..');
    this.passUpdateOrder.emit(order);
    this.showUpdate = false;
  }
}
