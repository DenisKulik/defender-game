import Character from '../prototypes-constructors';

test('should create a Zombie class object', () => {
  const recieved = new Character('Alex', 'Zombie');
  const expected = {
    name: 'Alex',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defense: 10,
  };
  expect(recieved).toMatchObject(expected);
});

test('should calculate the number of health', () => {
  const recieved = new Character('Alex', 'Zombie');
  recieved.damage(20);
  const expected = {
    name: 'Alex',
    type: 'Zombie',
    health: 82,
    level: 1,
    attack: 40,
    defense: 10,
  };
  expect(recieved).toMatchObject(expected);
});

test('should calculate the number of health', () => {
  const recieved = new Character('Alex', 'Zombie');
  recieved.damage(120);
  recieved.damage(20);
  const expected = {
    name: 'Alex',
    type: 'Zombie',
    health: -8,
    level: 1,
    attack: 40,
    defense: 10,
  };
  expect(recieved).toMatchObject(expected);
});

test('should display an Error', () => {
  expect(() => new Character(123, 'Bowman')).toThrow(
    new Error('Name must be a string')
  );
});

test('should display an Error', () => {
  expect(() => new Character('loremloremlorem', 'Daemon')).toThrow(
    new Error(
      'Name must contain a minimum of 2 and a maximum of 10 characters'
    )
  );
});

test('should display an Error', () => {
  expect(() => new Character('Alex', 'Khajiit')).toThrow(
    new Error('There is no such type')
  );
});
