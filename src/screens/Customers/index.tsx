import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { ReactElement } from 'react';
import { Screen } from '../../components';
import './index.css';
import logo from './logo.svg';

export const Customers = (): ReactElement => {
  return (
    <Screen>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Customers
          </Typography>
          <img src={logo} className="App-logo" alt="logo" />
        </Paper>
      </Grid>
    </Screen>
  );
};
