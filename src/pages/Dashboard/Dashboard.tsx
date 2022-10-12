import { Grid, Container, Typography, Avatar, Box } from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

import useDashboardState from './state/useDashboardState';

const Dashboard = () => {
  const { user } = useDashboardState();
  return (
    <Grid width={'100%'} height="100vh" bgcolor={'#22272E'} pt={10}>
      <Container sx={{ display: 'flex', flexDirection: 'row' }}>
        <Grid display="flex" direction="column">
          <Avatar
            src={user?.avatar_url}
            sx={{ width: 250, height: 250, marginBottom: 2 }}
          />
          <Typography color={'#ADBAC7'} variant="h2" fontWeight={600}>
            {user?.name}
          </Typography>
          <Typography color={'#ADBAC7'} fontSize={23}>
            {user?.login}
          </Typography>
          <Typography color={'#ADBAC7'} fontWeight={600} mt={2}>
            {user?.bio}
          </Typography>
          <Box mt={2} display="flex" alignItems={'center'} flexDirection="row">
            <GroupAddIcon
              sx={{
                color: '#ADBAC7',
              }}
            />
            <Typography color={'#fff'} fontWeight={600} ml={1}>
              {` ${user?.followers} Followers / ${user?.following} Following`}
            </Typography>
          </Box>
        </Grid>
        <Grid flex={1}>logs</Grid>
      </Container>
    </Grid>
  );
};

export default Dashboard;
