import { Grid } from '@mui/material';
import LoginLayout from '../Layouts/Login/LoginLayout';
import { HomeStyles } from './HomeStyles';
import Signup from '../components/Signup/Signup';

const Home = () => (
  <Grid flex={1} sx={HomeStyles.bg}>
    <LoginLayout LeftChild={<Signup />} RightChild={<>hi</>} />
  </Grid>
);

export default Home;
