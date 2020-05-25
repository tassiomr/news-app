import React, {useEffect} from 'react';
import {Text} from '../../components';
import {Container, Wrapper, Dot, DotWrapper, ShareButton} from './styles';
import {
  TouchableOpacity,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import {Linking, Platform, Animated} from 'react-native';
import Share from 'react-native-share';
import {INotice} from 'src/typescript/interfaces';
import Icon from 'react-native-vector-icons/EvilIcons';

const animationValues = {
  translateYInit: 400,
  translateYEnd: 0,
  opacityInit: 0,
  opacityEnd: 1,
  duration: 450,
};

export const Modal: React.FC<{
  notice: INotice;
  modalIsVisible: boolean;
  closeModal: () => void;
}> = ({notice, modalIsVisible, closeModal}) => {
  const translateY = new Animated.Value(animationValues.translateYInit);
  const opacity = new Animated.Value(animationValues.opacityInit);

  useEffect(() => {
    if (modalIsVisible) {
      Animated.timing(translateY, {
        toValue: animationValues.translateYEnd,
        duration: 450,
        useNativeDriver: true,
      }).start();
      Animated.timing(opacity, {
        toValue: animationValues.opacityEnd,
        duration: animationValues.duration,
        useNativeDriver: true,
      }).start();
    }
  }, [modalIsVisible]);

  const animateEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );

  function onHandlerStateChange(event: any) {
    const {translationY} = event.nativeEvent;

    if (translationY >= 10) {
      Animated.timing(translateY, {
        toValue: animationValues.translateYInit,
        duration: animationValues.duration,
        useNativeDriver: true,
      }).start();

      Animated.timing(opacity, {
        toValue: 0,
        duration: animationValues.duration,
        useNativeDriver: true,
      }).start(() => closeModal());
    }
  }

  return modalIsVisible ? (
    <Container
      style={{
        opacity,
      }}>
      <Wrapper
        style={{
          opacity,
          transform: [
            {
              translateY: translateY.interpolate({
                inputRange: [0, 2000],
                outputRange: [0, 2000],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}>
        <PanGestureHandler
          onGestureEvent={animateEvent}
          onHandlerStateChange={onHandlerStateChange}>
          <DotWrapper>
            <Dot />
          </DotWrapper>
        </PanGestureHandler>
        <Text.Title text={notice?.title} />
        <Text.Paragraph text={notice?.resume} />
        <TouchableOpacity onPress={() => Linking.openURL(notice?.link)}>
          <Text.Link text="Read the complete notice" />
        </TouchableOpacity>

        <ShareButton onPress={() => Share.open({url: notice?.link})}>
          <Icon
            name={Platform.OS === 'ios' ? 'share-apple' : 'share-google'}
            size={28}
          />
          <Text.Paragraph text="Share" />
        </ShareButton>
      </Wrapper>
    </Container>
  ) : null;
};
