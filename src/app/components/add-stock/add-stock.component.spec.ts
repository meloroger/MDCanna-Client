import { AddStockComponent } from './add-stock.component';
import {
  ComponentFixture,
  TestBed,
  async,
  tick,
  fakeAsync
} from '@angular/core/testing';
import { of } from 'rxjs';
import { ItemService } from 'src/app/services/item.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { StockService } from 'src/app/services/stock.service';
import { FormsModule } from '@angular/forms';

describe('AddStockComponent', () => {
  let component: AddStockComponent;
  let fixture: ComponentFixture<AddStockComponent>;
  const mockItemService = jasmine.createSpyObj('ItemService', {
    fetchAllItems: of([{ id: '1', name: 'item1' }])
  });
  const mockStockService = jasmine.createSpyObj('StockService', {
    createStockMovement: of([{}])
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AddStockComponent],
      providers: [
        { provide: ItemService, useValue: mockItemService },
        { provide: StockService, useValue: mockStockService }
      ]
      // schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(AddStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create instance', () => {
    expect(component).toBeTruthy();
  });

  it('should call itemService.fetchAllItems', fakeAsync(() => {
    mockItemService.fetchAllItems.and.callThrough();
    tick();
    fixture.detectChanges();
    expect(component.items.length).toBe(1);
  }));
});
