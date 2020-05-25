import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {normalize} from '../../../src/configs/helpers';

export const Image = styled.ImageBackground.attrs((props) => ({
  imageStyle: {
    borderRadius: 4,
  },
}))`
  height: ${normalize(50)}px;
  width: ${normalize(50)}px;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.TouchableOpacity`
  min-height: ${normalize(50)}px;
  width: 100%;
  margin-bottom: 16px;
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 4px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOpacity: '0.2',
      shadowRadius: 5,
      shadowOffset: '0px 0px',
    },

    android: {
      elevation: '3px',
    },
  })};
`;

export const TextWrapper = styled.View`
  flex: 1;
  justify-content: flex-start;
`;
