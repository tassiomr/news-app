import 'react-native-gesture-handler';
import React from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import theme from './src/theme';
import Routes from './src/routes';

const App: React.FC = () => {
  const themeColor = useColorScheme();
  return (
    <ThemeProvider theme={theme[themeColor || 'light']}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
