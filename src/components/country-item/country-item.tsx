import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

type Props = {
  country: ICountry;
};

export const CountryItem: FC<Props> = ({ country }) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/name/${country.name.common}`)}
      sx={{ maxWidth: 345 }}
      style={{ padding: '10px', marginBottom: '30px' }}
    >
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image={country.flags.png}
          alt='flag_image'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {country.name.common}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {country.capital}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {country.flag}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
