import { useDataContext } from '../../context/context';

export const CountryDescription = () => {
  const { countries } = useDataContext();
  return <div>CountryDescription</div>;
};
