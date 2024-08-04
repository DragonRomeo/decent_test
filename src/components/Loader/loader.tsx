import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const Loader = () => {
  return (
    <Box sx={{ position: 'absolute', top: '50%', left: '50%' }}>
      <CircularProgress />
    </Box>
  );
};
