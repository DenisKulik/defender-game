export default interface IMovie {
  readonly title: string;
  readonly year: number;
  readonly country: string;
  readonly tagline: string;
  readonly genre: string[];
  readonly time: string;
}
