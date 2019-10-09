import { StockMovement } from './stock-movement.model';

export interface Order {
  id?: string;
  itemId: string;
  quantity: number;
  userId?: string;
  complete: boolean;
  stockMovements: StockMovement[];
}
