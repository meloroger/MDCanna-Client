import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrderComponent } from './add-order.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { OrderFacade } from 'src/app/facades/order.facade';
import { ItemFacade } from 'src/app/facades/item.facade';
import { of } from 'rxjs';

describe('AddOrderComponent', () => {
  let component: AddOrderComponent;
  let fixture: ComponentFixture<AddOrderComponent>;
  const mockOrderFacade = jasmine.createSpyObj('OrderFacade', {
    createOrder: {}
  });
  let mockItemFacade = {
    items$: of([])
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      providers: [
        { provide: OrderFacade, useValue: mockOrderFacade },
        { provide: ItemFacade, useValue: mockItemFacade }
      ],
      declarations: [AddOrderComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(AddOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
