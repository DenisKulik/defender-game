import GameSavingLoader from '../promises';

test('should receive data', () => {
  expect(GameSavingLoader.load()).resolves.toBe(
    '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}'
  );
});
