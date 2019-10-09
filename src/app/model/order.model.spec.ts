import { Order } from './order.model';

describe('Order', () => {
  it('should create an instance', () => {
    const order: Order = {
      id: '1',
      itemId: 'itemid1',
      quantity: 1,
      complete: false,
      stockMovements: null
    };
    expect(order).toBeDefined();
  });
});
