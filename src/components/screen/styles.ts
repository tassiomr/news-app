import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {normalize} from '../../../src/configs/helpers';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.backgroundColor};
  ${Platform.select({
    ios: {
      paddingTop: normalize(30),
    },
  })}
`;
