import { Component, OnInit } from '@angular/core';
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
  ) {}

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.itemService.fetchAllItems().subscribe(data => (this.items = data));
  }

  onStockSubmit(): void {
    const stockMove = {
      itemId: this.itemId,
      quantity: this.quantity
    };
    console.log(stockMove);
    this.stockService.createStockMovement(stockMove);
  }
}
