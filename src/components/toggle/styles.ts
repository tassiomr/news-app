import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {normalize} from '../../../src/configs/helpers';

export const Button = styled.TouchableOpacity<{
  left?: boolean;
  selected: boolean;
}>`
  background-color: ${(props) =>
    props.selected
      ? props.theme.button.selected
      : props.theme.button.deselected};
  height: ${normalize(45)}px;
  width: ${normalize(100)}px;
  justify-content: center;
  align-items: center;
  border-top-left-radius: ${(props) => (props.left ? '55px' : '0')};
  border-top-right-radius: ${(props) => (!props.left ? '55px' : '0')};
  border-bottom-left-radius: ${(props) => (props.left ? '55px' : '0')};
  border-bottom-right-radius: ${(props) => (!props.left ? '55px' : '0')};

  ${Platform.select({
    android: {
      elevation: 10,
    },
  })}
`;

export const ButtonWrapper = styled.View`
  height: ${normalize(80)}px;
  width: 100%;
  position: absolute;
  bottom: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${Platform.select({
    ios: {
      shadowOpacity: '1',
      shadowColor: '#000000AA',
      shadowOffset: '1px 1px',
      shadowRadius: 5,
    },
  })}
`;

export const ButtonText = styled.Text<{selected: boolean}>`
  font-family: SairaExtraCondensed-Medium;
  font-size: 16px;
  text-decoration-line: ${(props) => (props.selected ? 'underline' : 'none')};
  color: ${(props) =>
    props.selected
      ? props.theme.button.textSelected
      : props.theme.button.textDeselected};
`;
