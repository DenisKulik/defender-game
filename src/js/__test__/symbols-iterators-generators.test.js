import Character from '../classes';
import Team from '../symbols-iterators-generators';

test('should add some characters', () => {
  const team = new Team();
  const pers1 = new Character('nord');
  const pers2 = new Character('khajiit');
  const pers3 = new Character('imperial');
  team.addAll(pers1, pers2, pers3);

  const recieved = [];
  for (let key of team) {
    recieved.push(key);
  }

  expect(recieved).toEqual([pers1, pers2, pers3]);
});
