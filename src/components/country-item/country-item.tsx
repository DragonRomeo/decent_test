import { FC } from 'react';

type Props = {
  country: ICountry;
};

export const CountryItem: FC<Props> = ({ country }) => {
  return (
    <>
      <img src={country.flags.png} alt='flag_image' />
      <p>{country.name.common}</p>
      <p>{country.capital}</p>
      <p>{country.flag}</p>
    </>
  );
};
