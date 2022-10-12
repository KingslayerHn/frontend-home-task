import { Grid } from '@mui/material';
import LoginLayout from '../Layouts/Login/LoginLayout';
import { HomeStyles } from './HomeStyles';

const Home = () => (
  <Grid flex={1} sx={HomeStyles.bg}>
    <LoginLayout />
  </Grid>
);

export default Home;
