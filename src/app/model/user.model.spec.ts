import { User } from './user.model';

describe('User', () => {
  it('should create an instance', () => {
    const user: User = {
      id: '1',
      email: 'test@gmail.com',
      password: 'password'
    };
    expect(user).toBeDefined();
  });
});
