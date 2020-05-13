import React from 'react';
import Routes from '../routes/routes';
import { SnackbarProvider } from 'notistack';

export default function Pages() {
 return (
  <SnackbarProvider maxSnack={3}>
   <Routes />
  </SnackbarProvider>
 );
}
