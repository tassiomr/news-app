import styled from 'styled-components/native';
import {Platform, ScrollView} from 'react-native';
import {normalize} from '../../../src/configs/helpers';

export const Image = styled.ImageBackground.attrs((props) => ({
  imageStyle: {
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },
}))`
  height: 200px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.TouchableOpacity`
  min-height: ${normalize(200)}px;
  width: 100%;
  margin-bottom: 16px;
  padding-bottom: 8px;
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 4px;
  ${Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOpacity: '0.5',
      shadowRadius: 5,
      shadowOffset: '1px 1px',
    },
  })};
`;
