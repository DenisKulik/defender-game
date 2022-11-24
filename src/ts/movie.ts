import IMovie from './imovie';

export default class Movie implements IMovie {
  readonly title: string;
  readonly year: number;
  readonly country: string;
  readonly tagline: string;
  readonly genre: string[];
  readonly time: string;

  constructor(
    title: string,
    year: number,
    country: string,
    tagline: string,
    genre: string[],
    time: string
  ) {
    this.title = title;
    this.year = year;
    this.country = country;
    this.tagline = tagline;
    this.genre = genre;
    this.time = time;
  }
}
