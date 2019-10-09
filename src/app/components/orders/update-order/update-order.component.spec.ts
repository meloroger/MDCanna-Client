import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrderComponent } from './update-order.component';
import { FormsModule } from '@angular/forms';
import { OrderFacade } from 'src/app/facades/order.facade';
import { ItemFacade } from 'src/app/facades/item.facade';
import { of } from 'rxjs';

describe('UpdateOrderComponent', () => {
  let component: UpdateOrderComponent;
  let fixture: ComponentFixture<UpdateOrderComponent>;
  let mockOrderFacade = {
    selectedOrder$: of()
  };
  let mockItemFacade = {
    items$: of([])
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [UpdateOrderComponent],
      providers: [
        { provide: OrderFacade, useValue: mockOrderFacade },
        { provide: ItemFacade, useValue: mockItemFacade }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
