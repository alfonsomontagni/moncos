import { UsersService } from './users.service';

describe('UsersService2', () => {
  let service: UsersService;

  beforeEach(() => {
    // Crea un'istanza nuova di UsersService prima di ogni test
    service = new UsersService();
  });

  it('2should add a user to the users array', () => {
    const user = { id: '1', name: 'Test User', email: 'test@example.com' }; // Assicurati che questo oggetto corrisponda all'interfaccia UserInterface
    service.addUser(user);
    expect(service.users).toContain(user);
  });

  it('2should remove a user from the users array', () => {
    const user1 = { id: '1', name: 'Test User 1', email: 'test1@example.com' };
    const user2 = { id: '2', name: 'Test User 2', email: 'test2@example.com' };
    service.addUser(user1);
    service.addUser(user2);

    service.removeUser(user1.id);

    expect(service.users).not.toContain(user1);
    expect(service.users).toContain(user2);
  });
});
