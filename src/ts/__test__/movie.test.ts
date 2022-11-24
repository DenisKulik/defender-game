import Movie from '../movie';

test('should create a new movie', () => {
  const movie = new Movie(
    'The Avengers',
    2012,
    'USA',
    'Avengers Assemble!',
    ['fantastic', 'action', 'fantasy', 'adventures'],
    '137 min./ 02:17'
  );
  const expected = {
    title: 'The Avengers',
    year: 2012,
    country: 'USA',
    tagline: 'Avengers Assemble!',
    genre: ['fantastic', 'action', 'fantasy', 'adventures'],
    time: '137 min./ 02:17',
  };
  expect(movie).toMatchObject(expected);
});
