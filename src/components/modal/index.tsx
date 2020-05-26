import React, {useEffect} from 'react';
import {Text} from '../../components';
import {
  Container,
  Wrapper,
  Dot,
  DotWrapper,
  ShareButton,
  LinkButton,
  ShareIcon,
} from './styles';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {Linking, Platform, Animated, StatusBar} from 'react-native';
import Share from 'react-native-share';
import {INotice} from 'src/typescript/interfaces';

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
      StatusBar.setHidden(true, 'fade');

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
      StatusBar.setHidden(false, 'fade');
      Animated.timing(translateY, {
        toValue: animationValues.translateYInit,
        duration: animationValues.duration,
        useNativeDriver: true,
      }).start();

      Animated.timing(opacity, {
        toValue: 0,
        duration: animationValues.duration,
        useNativeDriver: true,
      }).start(() => {
        closeModal();
      });
    }
  }

  return modalIsVisible ? (
    <PanGestureHandler
      onGestureEvent={animateEvent}
      onHandlerStateChange={onHandlerStateChange}>
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
          <DotWrapper>
            <Dot />
          </DotWrapper>
          <Text.Title text={notice?.title} />
          <Text.Paragraph text={notice?.resume} />
          <LinkButton onPress={() => Linking.openURL(notice?.link)}>
            <Text.Link text="Read the complete notice" />
          </LinkButton>

          <ShareButton onPress={() => Share.open({url: notice?.link})}>
            <ShareIcon />
            <Text.Paragraph text="Share" />
          </ShareButton>
        </Wrapper>
      </Container>
    </PanGestureHandler>
  ) : null;
};
