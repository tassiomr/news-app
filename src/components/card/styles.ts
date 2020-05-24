import styled from 'styled-components/native';
import {Platform, ScrollView} from 'react-native';
import {normalize} from '../../../src/configs/helpers';

export const Image = styled.Image`
  height: 200px;
  width: 100%;
  background-color: ${(props) => props.theme.backgroundColor};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const CardContainer = styled.View`
  min-height: ${normalize(200)}px;
  width: 100%;
  margin-bottom: 16px;
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 10px;
  ${Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOpacity: '0.5',
      shadowRadius: 5,
      shadowOffset: '1px 1px',
    },
  })};
`;
