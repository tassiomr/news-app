import styled from 'styled-components/native';

import {Animated} from 'react-native';
import {normalize} from '../../../src/configs/helpers';

const BaseContainer = styled.View`
  background-color: rgba(0, 0, 0, 0.7);
  flex: 1;
  position: absolute;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const Container = Animated.createAnimatedComponent(BaseContainer);

export const BaseWrapper = styled.View`
  background-color: ${(props) => props.theme.backgroundColor};
  width: 100%;
  height: 50%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 12px;
`;

export const Wrapper = Animated.createAnimatedComponent(BaseWrapper);

export const Dot = styled.View`
  height: 10px;
  width: 100px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.titleColor};
  margin-bottom: 10px;
  align-self: center;
`;

const BaseDotWrapper = styled.View`
  width: 100%;
`;

export const DotWrapper = Animated.createAnimatedComponent(BaseDotWrapper);

export const ShareButton = styled.TouchableOpacity`
  margin-top: 12px;
  justify-content: center;
  align-items: center;

  height: 50px;
  width: 50px;
`;

export const LinkButton = styled.TouchableOpacity`
  width: ${normalize(120)}px;
  height: 30px;
  justify-content: center;
`;
