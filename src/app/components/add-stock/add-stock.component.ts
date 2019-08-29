import { Component, OnInit, Input } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { Item } from 'src/app/model/item.model';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {
  items: Item[];
  itemId: string;
  quantity: number;

  constructor(private stockService: StockService) {}

  ngOnInit() {}

  onStockSubmit() {
    const stockMove = {
      itemId: this.itemId,
      quantity: this.quantity
    };

    this.stockService.createStockMovement(stockMove);
  }
}
