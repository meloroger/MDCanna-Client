export interface Order {
  id?: string;
  itemId: string;
  quantity: number;
  userId?: string;
  complete: boolean;
  stockMovements: object[];
}
