import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material';
const root = ReactDOM.createRoot(document.getElementById('root'));


const theme = createTheme({
  palette: {
    primary: {
      main: '#F8CB2E',
      contrastText: '#fff',
    },
    secondary: {
      main: '#404B69',
      contrastText: '#fff'
    },
    error: {
      main: '#b71c1c'
    }
  },
  typography: {
  }
  
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
