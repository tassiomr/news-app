import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity<{
  left?: boolean;
  selected: boolean;
}>`
  background-color: ${(props) =>
    props.selected
      ? props.theme.button.selected
      : props.theme.button.deselected};
  height: 55px;
  width: 120px;
  justify-content: center;
  align-items: center;
  border-top-left-radius: ${(props) => (props.left ? '55px' : '0')};
  border-top-right-radius: ${(props) => (!props.left ? '55px' : '0')};
  border-bottom-left-radius: ${(props) => (props.left ? '55px' : '0')};
  border-bottom-right-radius: ${(props) => (!props.left ? '55px' : '0')};
`;

export const ButtonWrapper = styled.View`
  height: 80px;
  width: 100%;
  position: absolute;
  bottom: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${Platform.select({
    ios: {
      shadowOpacity: '1',
      shadowColor: '#000',
      shadowOffset: '1px 1px',
      shadowRadius: 10,
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
