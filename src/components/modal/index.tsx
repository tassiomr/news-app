import React from 'react';
import {Text} from '../../components';
import {Container, Wrapper, Doodle, ShareButton} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Linking, Platform} from 'react-native';
import Share from 'react-native-share';
import {INotice} from 'src/typescript/interfaces';
import Icon from 'react-native-vector-icons/EvilIcons';

export const Modal: React.FC<{notice: INotice}> = ({notice}) => {
  return (
    <Container>
      <Doodle />
      <Wrapper>
        <Text.Title text={notice.title} />
        <Text.Paragraph text={notice.resume} />
        <TouchableOpacity onPress={() => Linking.openURL(notice.link)}>
          <Text.Link text="Read the complete notice" />
        </TouchableOpacity>

        <ShareButton onPress={() => Share.open({url: notice.link})}>
          <Icon
            name={Platform.OS === 'ios' ? 'share-apple' : 'share-google'}
            size={28}
          />
          <Text.Paragraph text="Share" />
        </ShareButton>
      </Wrapper>
    </Container>
  );
};
