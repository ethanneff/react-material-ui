import Box from '@mui/material/Box';
import { red } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ReactElement } from 'react';
import { RouterProvider } from '../Router';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export const App = (): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <RouterProvider />
      </Box>
    </ThemeProvider>
  );
};
