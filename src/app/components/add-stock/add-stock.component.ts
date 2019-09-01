import { Component, OnInit, Input } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { Item } from 'src/app/model/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {
  items: Item[];
  itemId: string;
  quantity: number;

  constructor(
    private stockService: StockService,
    private itemService: ItemService
  ) {
    this.itemService.fetchAllItems().subscribe(data => (this.items = data));
  }

  ngOnInit() {}

  onStockSubmit() {
    const stockMove = {
      id: uuid.v4(),
      itemId: this.itemId,
      quantity: this.quantity
    };
    console.log(stockMove);
    this.stockService.createStockMovement(stockMove);
  }
}
