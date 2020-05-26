import styled from 'styled-components/native';
import {normalize} from '../../../src/configs/helpers';

export const Wrapper = styled.View`
  margin-top: 40px;
`;
export const Toogle = styled.Switch.attrs((props) => ({
  trackColor: {true: props.theme.activeIcon},
}))``;

export const CopyRight = styled.Text`
  justify-content: center;
  width: 100%;
  font-family: SairaExtraCondensed-Medium;
  font-size: ${normalize(14)}px;
  padding-left: ${normalize(12)}px;
  background-color: ${(props) => props.theme.settingsInfo.background};
  color: ${(props) => props.theme.settingsInfo.text};
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${normalize(8)}px;
  padding-left: ${normalize(12)}px;
`;

export const WrapperControllers = styled.View`
  padding: ${normalize(8)}px;
`;
