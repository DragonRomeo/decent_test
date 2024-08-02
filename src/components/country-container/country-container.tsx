import { useDataContext } from '../../context/context';
import { CountryItem } from '../country-item/country-item';
import style from './country-container.module.scss';

export const CountryContainer = () => {
  const { countries, error, isLoad } = useDataContext();
  console.log(error);

  return (
    <div className={style.container}>
      <p>{error && error.message}</p>
      {isLoad ? (
        countries &&
        countries.map((country: ICountry, index) => (
          <CountryItem key={index} country={country}></CountryItem>
        ))
      ) : (
        <p className='status'>Loading...</p>
      )}
    </div>
  );
};
