import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const CountryDescription = () => {
  const { name } = useParams();
  const [info, setInfo] = useState<Array<ICountry> | null>(null);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(false);
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ошибка запроса');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setInfo(data);
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => setIsLoad(true));
  }, [name]);
  console.log(info);

  return (
    <div>
      <p>CountryDescription</p>
      <pre>{isLoad ? JSON.stringify(info, null, 4) : 'Loading...'}</pre>
    </div>
  );
};
