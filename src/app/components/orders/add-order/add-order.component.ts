import { Component, OnInit } from '@angular/core';
import { OrderFacade } from 'src/app/facades/order.facade';
import { ItemFacade } from 'src/app/facades/item.facade';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  id: string;
  itemId: string;
  quantity: number;
  items$ = this.itemFacade.items$;

  constructor(
    private orderFacade: OrderFacade,
    private itemFacade: ItemFacade,
    private router: Router
  ) {}

  ngOnInit() {}

  onOrderSubmit() {
    console.log('createOrder fired off..');
    const user = JSON.parse(localStorage.getItem('user'));

    console.log(user);
    const order = {
      itemId: this.itemId,
      userId: user.id,
      quantity: this.quantity,
      complete: false,
      stockMovements: []
    };
    console.log(order);
    this.orderFacade.createOrder(order);
    this.router.navigate(['/dashboard']);
  }
}
