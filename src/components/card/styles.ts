import styled from 'styled-components/native';
import {Platform, ScrollView} from 'react-native';
import {normalize} from '../../../src/configs/helpers';

export const Image = styled.ImageBackground.attrs((props) => ({
  imageStyle: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
}))`
  height: 200px;
  width: 100%;
  justify-content: center;
  align-items: center;
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
