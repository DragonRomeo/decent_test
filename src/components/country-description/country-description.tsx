import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const CountryDescription = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [info, setInfo] = useState<Array<ICountry> | null>(null);

  useEffect(() => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setInfo(data);
      });
    //TODO: add catch error
  }, [name]);
  console.log(info);

  return (
    <div>
      <p>CountryDescription</p>
      <p>{JSON.stringify(info, null, 4)}</p>
    </div>
  );
};
