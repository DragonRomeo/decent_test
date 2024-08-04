import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from '../Loader/loader';
import { Typography } from '@mui/material';

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
    <>
      <Typography variant='h5'>Country Page</Typography>
      {isLoad ? (
        <pre
          style={{
            fontFamily: 'inherit',
            fontSize: '15px',
            textAlign: 'center',
          }}
        >
          {JSON.stringify(info, null, 4)}
        </pre>
      ) : (
        <Loader />
      )}
    </>
  );
};
