import 'react-native-gesture-handler';
import React from 'react';

import Routes from './src/routes';
import {AppProvider} from './src/context/app.context';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
};

export default App;
