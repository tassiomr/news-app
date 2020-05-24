import React, {useEffect} from 'react';
import {Screen, Text, Card, NoticeFlatList} from '../../components';
import {useNotice} from '../../../src/context/noticies.context';
import styled from 'styled-components/native';
import {NoticeType} from '../../../src/typescript/enums';
import {Platform, ActivityIndicator} from 'react-native';

const Button = styled.TouchableOpacity<{left: boolean; select: boolean}>`
  background-color: ${(props) =>
    props.select ? props.theme.button.selected : props.theme.button.deselected};
  height: 55px;
  width: 120px;
  justify-content: center;
  align-items: center;
  border-top-left-radius: ${(props) => (props.left ? '55px' : '0')};
  border-top-right-radius: ${(props) => (!props.left ? '55px' : '0')};
  border-bottom-left-radius: ${(props) => (props.left ? '55px' : '0')};
  border-bottom-right-radius: ${(props) => (!props.left ? '55px' : '0')};
`;

const ButtonWrapper = styled.View`
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

export const Home: React.FC = () => {
  const {getNoticies, notices, changePage, isLoading} = useNotice();

  useEffect(() => {
    getNoticies();
  });

  return (
    <Screen>
      <Text.HeaderTitle text="Home" />
      <NoticeFlatList data={notices.data} />
      <ButtonWrapper>
        <Button
          onPress={() => changePage(NoticeType.technology)}
          select={NoticeType.technology === notices.type}
          left={true}>
          <Text.Link text="Technology" />
        </Button>
        <Button
          onPress={() => changePage(NoticeType.science)}
          left={false}
          select={NoticeType.science === notices.type}>
          <Text.Link text="Science" />
        </Button>
      </ButtonWrapper>
    </Screen>
  );
};
