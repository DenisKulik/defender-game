import Mythical, { Daemon, Magician, Validator } from '../math-regexp';

// Math
test('should create a new character', () => {
  const mythical = new Mythical('Alex');
  const expected = {
    name: 'Alex',
    health: 100,
    level: 1,
    defence: 0,
  };
  expect(mythical).toMatchObject(expected);
});

test('should calculate the damage with the help of a stoned', () => {
  const merlin = new Magician('Merlin');
  merlin.attack = 100;
  merlin.distance = 2;
  merlin.stoned = true;
  expect(merlin.attack).toBe(85);
});

test('should calculate the damage with the help of a stoned', () => {
  const merlin = new Daemon('Merlin');
  merlin.attack = 200;
  merlin.distance = 2;
  merlin.stoned = true;
  expect(merlin.attack).toBe(175);
});

test('should calculate the damage without the help of a stoned', () => {
  const merlin = new Magician('Merlin');
  merlin.attack = 100;
  merlin.distance = 2;
  merlin.stoned = false;
  expect(merlin.attack).toBe(90);
});

test('should calculate the damage without the help of a stoned', () => {
  const merlin = new Daemon('Merlin');
  merlin.attack = 100;
  merlin.distance = 5;
  merlin.stoned = false;
  expect(merlin.attack).toBe(60);
});

test('should return damage equal to 0', () => {
  const merlin = new Daemon('Merlin');
  merlin.attack = 100;
  merlin.distance = 6;
  expect(merlin.attack).toBe(0);
});

test('should return current condition', () => {
  const merlin = new Daemon('Merlin');
  merlin.attack = 100;
  merlin.distance = 6;
  merlin.stoned = true;
  const result = merlin.stoned;
  expect(result).toBe(true);
});

test('should display an Error', () => {
  const mythical = new Mythical('Bob');
  mythical.attack = 100;
  expect(() => mythical.attack).toThrow(
    new Error('The distance is not specified!')
  );
});

// Regexp
test('should validate latin letters, dashes, lower slash', () => {
  const username = 'Jemele_1-mag';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test('should return false if there are more than 3 digits in a row', () => {
  const username = 'Sahthn9999n';
  expect(Validator.validateUsername(username)).toBeFalsy();
});

test('should return false if there are more than 3 digits in a row', () => {
  const username = 'Sahthn9999n';
  expect(Validator.validateUsername(username)).toBeFalsy();
});

test('should return false if there is a digit at the beginning of the line', () => {
  const username = '7Uaralon';
  expect(Validator.validateUsername(username)).toBeFalsy();
});
