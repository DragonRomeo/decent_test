import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  country: ICountry;
};

export const CountryItem: FC<Props> = ({ country }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/name/${country.name.common}`)}>
      <img src={country.flags.png} alt='flag_image' />
      <p>{country.name.common}</p>
      <p>{country.capital}</p>
      <p>{country.flag}</p>
    </div>
  );
};
