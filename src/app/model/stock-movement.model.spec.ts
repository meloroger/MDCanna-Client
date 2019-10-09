import { StockMovement } from './stock-movement.model';

describe('StockMovement', () => {
  it('should create an instance', () => {
    const stock: StockMovement = { id: '1', itemId: 'itemId1', quantity: 1 };
    expect(stock).toBeDefined();
  });
});
