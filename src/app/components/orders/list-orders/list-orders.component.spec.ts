import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrdersComponent } from './list-orders.component';
import { Component, Input } from '@angular/core';
import { Order } from 'src/app/model/order.model';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { OrderFacade } from 'src/app/facades/order.facade';

@Component({
  selector: 'app-order',
  template: '<div></div>'
})
class FakeOrderComponent {
  @Input() order: Order;
}

describe('ListOrdersComponent', () => {
  let component: ListOrdersComponent;
  let fixture: ComponentFixture<ListOrdersComponent>;
  const mockOrderFacade = {
    orderVM$: of([])
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ListOrdersComponent, FakeOrderComponent],
      providers: [{ provide: OrderFacade, useValue: mockOrderFacade }]
    }).compileComponents();
    fixture = TestBed.createComponent(ListOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
