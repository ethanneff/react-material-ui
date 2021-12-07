import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { ReactElement } from 'react';
import { RecentOrders, Screen } from '../../components';

export const Orders = (): ReactElement => {
  return (
    <Screen>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Orders
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <RecentOrders />
        </Paper>
      </Grid>
    </Screen>
  );
};
