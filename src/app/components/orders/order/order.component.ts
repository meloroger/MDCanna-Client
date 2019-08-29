import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/model/order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() order: Order;

  constructor() {
    console.log(this.order);
  }

  ngOnInit() {}

  onDeleteOrder() {}
}
