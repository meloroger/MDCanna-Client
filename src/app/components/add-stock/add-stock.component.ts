import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { Item } from 'src/app/model/item.model';
import { ItemService } from 'src/app/services/item.service';
import { StockFacade } from 'src/app/facades/state/stock.facade';
import { ItemFacade } from 'src/app/facades/item.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {
  items$: Observable<Item[]>;
  itemId: string;
  quantity: number;

  constructor(
    private stockFacade: StockFacade,
    private itemFacade: ItemFacade
  ) {}

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.items$ = this.itemFacade.items$;
  }

  onStockSubmit(): void {
    const stockMove = {
      itemId: this.itemId,
      quantity: this.quantity
    };
    console.log(stockMove);
    this.stockFacade.createStockMovement(stockMove);
  }
}
