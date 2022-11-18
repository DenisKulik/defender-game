import { displayHealthLevel, sortByHealth } from '../app';

// displayHealthLevel
test('should display health level for 0', () => {
  const recieved = displayHealthLevel({ name: 'Маг', health: 0 });
  expect(recieved).toBe('critical');
});

test('should display health level for 50', () => {
  const recieved = displayHealthLevel({ name: 'Маг', health: 50 });
  expect(recieved).toBe('wounded');
});

test('should display health level for 90', () => {
  const recieved = displayHealthLevel({ name: 'Маг', health: 90 });
  expect(recieved).toBe('healthy');
});

// sortByHealth
test('should sort 0 player', () => {
  const recieved = sortByHealth([]);
  expect(recieved).toEqual([]);
});

test('should sort 1 player', () => {
  const recieved = sortByHealth([{ name: 'мечник', health: 10 }]);
  expect(recieved).toEqual([{ name: 'мечник', health: 10 }]);
});

test('should sort 3 players', () => {
  const recieved = sortByHealth([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);
  expect(recieved).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});
