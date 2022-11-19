import Character, {
  Bowerman,
  Swordsman,
  Magician,
  Undead,
  Zombie,
  Daemon,
} from '../classes';

// Character
test('should create a new character', () => {
  const recieved = new Character('Alex');
  const expected = {
    name: 'Alex',
    health: 100,
    level: 1,
    attack: 0,
    defence: 0,
  };
  expect(recieved).toMatchObject(expected);
});

test('should create a new bowerman', () => {
  const recieved = new Bowerman('Alex');
  const expected = {
    name: 'Alex',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(recieved).toMatchObject(expected);
});

test('should create a new swordsman', () => {
  const recieved = new Swordsman('Charles');
  const expected = {
    name: 'Charles',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(recieved).toMatchObject(expected);
});

test('should create a new magician', () => {
  const recieved = new Magician('Henry');
  const expected = {
    name: 'Henry',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(recieved).toMatchObject(expected);
});

test('should create a new undead', () => {
  const recieved = new Undead('Liam');
  const expected = {
    name: 'Liam',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(recieved).toMatchObject(expected);
});

test('should create a new zombie', () => {
  const recieved = new Zombie('Shon');
  const expected = {
    name: 'Shon',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(recieved).toMatchObject(expected);
});

test('should create a new daemon', () => {
  const recieved = new Daemon('Morgan');
  const expected = {
    name: 'Morgan',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(recieved).toMatchObject(expected);
});

test('should display an Error', () => {
  expect(() => new Character(123)).toThrow(
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

test('should calculate the number of health', () => {
  const recieved = new Character('Alex');
  recieved.damage(20);
  const expected = {
    name: 'Alex',
    health: 80,
    level: 1,
    attack: 0,
    defence: 0,
  };
  expect(recieved).toMatchObject(expected);
});

test('should calculate the number of health', () => {
  const recieved = new Character('Alex');
  recieved.damage(120);
  recieved.damage(20);
  const expected = {
    name: 'Alex',
    health: -20,
    level: 1,
    attack: 0,
    defence: 0,
  };
  expect(recieved).toMatchObject(expected);
});

test('should raise the level', () => {
  const recieved = new Bowerman('Peter');
  recieved.levelUp();
  const expected = {
    name: 'Peter',
    type: 'Bowerman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  expect(recieved).toMatchObject(expected);
});

test('should display an Error', () => {
  expect(() => {
    const pers = new Character('Peter');
    pers.damage(100);
    pers.levelUp();
  }).toThrow(
    new Error('it is impossible to raise the level of the deceased')
  );
});
