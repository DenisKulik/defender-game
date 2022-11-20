import Character from '../classes';
import { Team, ErrorRepository } from '../containers';

// Team
test('should add a new character', () => {
  const team = new Team();
  const pers = new Character('nord');
  team.add(pers);
  const recieved = team.members;
  expect(recieved).toContain(pers);
});

test('should do not re-add a character', () => {
  function recieved() {
    const team = new Team();
    const pers = new Character('nord');
    team.add(pers);
    team.add(pers);
  }
  expect(recieved).toThrow(
    new Error('There is already such a character!')
  );
});

test('should add some characters', () => {
  const team = new Team();
  const pers1 = new Character('nord');
  const pers2 = new Character('khajiit');
  const pers3 = new Character('imperial');
  team.addAll(pers1, pers2, pers3);
  const recieved = team.members;
  expect(recieved).toContain(pers1, pers2, pers3);
});

test('should do not add duplicate characters', () => {
  const team = new Team();
  const pers1 = new Character('nord');
  const pers2 = new Character('khajiit');
  const pers3 = new Character('imperial');
  team.addAll(pers1, pers2, pers2, pers3);
  const recieved = team.members;
  expect(recieved).toContain(pers1, pers2, pers3);
});

test('should return an array', () => {
  const team = new Team();
  const pers1 = new Character('nord');
  const pers2 = new Character('khajiit');
  const pers3 = new Character('imperial');
  team.addAll(pers1, pers2, pers3);
  const recieved = team.toArray();
  expect(recieved).toEqual([pers1, pers2, pers3]);
});

// ErrorRepository
test('should add a new error', () => {
  const newError = new ErrorRepository();
  newError.errors.set('xx00xx', 'There is already such a character!');
  const recieved = newError.translate('xx00xx');
  expect(recieved).toBe('There is already such a character!');
});

test('should display an error', () => {
  const newError = new ErrorRepository();
  const recieved = newError.translate('xx01xx');
  expect(recieved).toBe('Unknown error');
});
