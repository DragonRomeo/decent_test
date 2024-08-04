import { Container } from '@mui/material';
import { CountryDescription } from '../components/country-description/country-description';

export const SinglePage = () => {
  return (
    <Container
      maxWidth='lg'
      style={{
        overflowX: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <CountryDescription />
    </Container>
  );
};
