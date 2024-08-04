import { Container, Grid, Typography } from '@mui/material';
import { useDataContext } from '../../context/context';
import { CountryItem } from '../country-item/country-item';
import { Loader } from '../loader/loader';

export const CountryContainer = () => {
  const { countries, error, isLoad } = useDataContext();
  return (
    <>
      <Container maxWidth='lg'>
        <Typography variant='h4' align='center' style={{ marginTop: '20px' }}>
          Countries
        </Typography>
        {error && (
          <Typography variant='h5' align='center'>
            {error?.message}
          </Typography>
        )}
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
