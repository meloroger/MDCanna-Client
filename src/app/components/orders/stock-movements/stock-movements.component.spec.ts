import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMovementsComponent } from './stock-movements.component';

describe('StockMovementsComponent', () => {
  let component: StockMovementsComponent;
  let fixture: ComponentFixture<StockMovementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockMovementsComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(StockMovementsComponent);
    component = fixture.componentInstance;
    component.stockMovements = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
