import { createTheme } from '@mui/material/styles';

export const Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1C3132',
    },
    secondary: {
      main: '#d6a266',
    },
    error: {
      main: '#9bbcba',
    },
    background: {
      default: '#1C3132',
      paper: '#1c3132',
    },
    success: {
      main: '#9bbcba',
    },
    text: {
      secondary: '#D6A266',
      primary: '#f6eade',
      disabled: '#d6a266',
      hint: '#d6a266',
    },
    warning: {
      main: '#9bbcba',
    },
    info: {
      main: '#9bbcba',
    },
  },
  typography: {
    fontFamily: 'Oswald',
  },
});
