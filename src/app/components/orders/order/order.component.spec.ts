import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderComponent } from './order.component';
import { Component } from '@angular/core';
import { OrderFacade } from 'src/app/facades/order.facade';
import { of } from 'rxjs';

@Component({
  selector: 'app-update-order',
  template: '<div></div>'
})
class FakeOrderUpdateComponent {
  //@Input() order: Order;
}
@Component({
  selector: 'app-stock-movements',
  template: '<div></div>'
})
class FakeStockMovementsComponent {
  //@Input() order: Order;
}

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;
  let mockOrderFacade = {
    deleteOrder: {}
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        OrderComponent,
        FakeOrderUpdateComponent,
        FakeStockMovementsComponent
      ],
      providers: [{ provide: OrderFacade, useValue: mockOrderFacade }]
    }).compileComponents();
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    component.order = {
      id: '1',
      itemId: 'itemId',
      quantity: 1,
      complete: false,
      stockMovements: null
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
