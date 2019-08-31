export class Order {
  id: string;
  itemId: string;
  quantity: number;
  complete: boolean;
  stockMovements: object[];
}
