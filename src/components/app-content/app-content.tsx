import { CountryContainer } from '../country-container/country-container';
import { DataContext } from '../../context/context';
import { useEffect, useState } from 'react';

const url = 'https://restcountries.com/v3.1/all';

export const AppContent = () => {
  const [countries, setCountries] = useState<Array<ICountry> | null>(null);
  const [error, setError] = useState<null | Error>(null);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(false);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ошибка запроса');
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setCountries(result);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setIsLoad(true));
  }, []);

  return (
    <>
      <DataContext.Provider value={{ countries, error, isLoad }}>
        <CountryContainer />
      </DataContext.Provider>
    </>
  );
};
