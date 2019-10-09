import { Item } from './item.model';

describe('Item', () => {
  it('should create an instance', () => {
    const item: Item = { id: '1', name: 'item1' };
    expect(item).toBeDefined();
  });
});
