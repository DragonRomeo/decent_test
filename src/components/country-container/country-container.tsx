import { Container, Grid, Typography } from '@mui/material';
import { useDataContext } from '../../context/context';
import { CountryItem } from '../country-item/country-item';
import { Loader } from '../Loader/loader';

export const CountryContainer = () => {
  const { countries, error, isLoad } = useDataContext();
  console.log(error);

  return (
    <>
      <Container maxWidth='lg'>
        <Typography variant='h4' align='center'>
          Countries
        </Typography>
        <Grid container spacing={5} style={{ marginTop: '20px' }}>
          {isLoad ? (
            countries &&
            countries.map((country: ICountry, index) => (
              <Grid
                item
                xs={12}
                sm={4}
                style={{ marginTop: '20px' }}
                key={index}
              >
                <CountryItem country={country} />
              </Grid>
            ))
          ) : (
            <Loader />
          )}
        </Grid>
      </Container>
    </>
  );
};
