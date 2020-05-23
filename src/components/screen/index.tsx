import React, {useContext} from 'react';
import {Container} from './styles';
import {
  StatusBar,
  useColorScheme,
  ColorSchemeName,
  StatusBarStyle,
} from 'react-native';
import {ThemeContext} from 'styled-components';

const getBarStyle = (schema: ColorSchemeName): StatusBarStyle => {
  if (!schema || schema === 'light') {
    return 'dark-content';
  } else {
    return 'light-content';
  }
};

export const Screen: React.FC = ({children}) => {
  const theme = useContext(ThemeContext);
  const colorSchema = useColorScheme();

  return (
    <Container>
      <StatusBar
        backgroundColor={theme.backgroundColor}
        barStyle={getBarStyle(colorSchema)}
      />
      {children}
    </Container>
  );
};
