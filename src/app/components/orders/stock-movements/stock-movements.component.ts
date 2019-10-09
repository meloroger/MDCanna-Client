import { Component, OnInit, Input } from '@angular/core';
import { StockMovement } from 'src/app/model/stock-movement.model';
import { StockService } from '../../../services/stock.service';
import { Order } from 'src/app/model/order.model';

@Component({
  selector: 'app-stock-movements',
  templateUrl: './stock-movements.component.html',
  styleUrls: ['./stock-movements.component.css']
})
export class StockMovementsComponent implements OnInit {
  @Input() order: Order;
  stockMovements: StockMovement[];
  constructor(/* private stockService: StockService */) {}

  ngOnInit() {
    //this.getStockMovement();
    //this.showStockMovements(this.order.id);
  }

  // getStockMovement() {
  //const { stockMovements } = this.order;
  //this.stockMovements = stockMovements;
  /* console.log(stockMovements);
    this.stockService.fetchAllStockMovements().subscribe(
      data => {
        this.stockMovements = data;
      },
      err => console.log(err)
    );
 */
  //this.showStockMovements(this.order.id);
  //}

  /*  showStockMovements(id: string) {
    console.log(this.stockMovements);
    const filteredStkMvmets = this.stockMovements.filter(
      stockMvmts => stockMvmts.itemId === id
    );

    return filteredStkMvmets;
  }*/
}
