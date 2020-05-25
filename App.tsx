import 'react-native-gesture-handler';
import React from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import theme from './src/theme';
import Routes from './src/routes';
import {NoticeProvider} from './src/context/noticies.context';

const App: React.FC = () => {
  const themeColor = useColorScheme();
  return (
    <ThemeProvider theme={theme[themeColor || 'light']}>
      <NoticeProvider>
        <Routes />
      </NoticeProvider>
    </ThemeProvider>
  );
};

export default App;
