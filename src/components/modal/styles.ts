import styled from 'styled-components/native';

import {Animated, Platform} from 'react-native';
import {normalize} from '../../../src/configs/helpers';
import Icon from 'react-native-vector-icons/EvilIcons';

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
  border-top-left-radius: ${normalize(20)}px;
  border-top-right-radius: ${normalize(20)}px;
  padding: 12px;
`;

export const Wrapper = Animated.createAnimatedComponent(BaseWrapper);

export const Dot = styled.View`
  height: ${normalize(10)}px;
  width: ${normalize(100)}px;
  border-radius: ${normalize(20)}px;
  background-color: ${(props) => props.theme.titleColor};
  margin-bottom: ${normalize(10)}px;
  align-self: center;
`;

const BaseDotWrapper = styled.View`
  width: 100%;
`;

export const DotWrapper = Animated.createAnimatedComponent(BaseDotWrapper);

export const ShareButton = styled.TouchableOpacity`
  margin-top: ${normalize(12)}px;
  align-items: center;

  height: ${normalize(40)}px;
  width: ${normalize(40)}px;
`;

export const LinkButton = styled.TouchableOpacity`
  width: ${normalize(120)}px;
  height: ${normalize(30)}px;
  justify-content: center;
`;

export const ShareIcon = styled(Icon).attrs((props) => ({
  size: 28,
  name: Platform.OS === 'ios' ? 'share-apple' : 'share-google',
}))`
  color: ${(props) => props.theme.paragraphColor};
`;
