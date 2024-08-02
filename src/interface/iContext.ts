export interface IContext {
  countries: Array<ICountry> | null;
  error: Error | null;
  isLoad: boolean;
}
