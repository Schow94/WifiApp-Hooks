import React from 'react';

import Routes from './Routes';
import { LocationProvider } from './contexts/LocationContext';
import Navbar from './Navbar';
import { SelectedBizProvider } from './contexts/SelectedBizContext';
import { BizListProvider } from './contexts/BizListContext';
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <LocationProvider>
      <BizListProvider>
        <SelectedBizProvider>
          <CssBaseline />

          <Navbar />
          <Routes />
        </SelectedBizProvider>
      </BizListProvider>
    </LocationProvider>
  );
}

export default App;
