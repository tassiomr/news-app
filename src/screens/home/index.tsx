import React, {useEffect} from 'react';
import {Screen, Text, Card, NoticeFlatList} from '../../components';
import {useNotice, NoticeProvider} from '../../../src/context/noticies.context';

export const Home: React.FC = () => {
  const {getNoticies, notices} = useNotice();

  useEffect(() => {
    getNoticies();
  });

  return (
    <Screen>
      <Text.HeaderTitle text="Home" />
      <NoticeFlatList data={notices} />
    </Screen>
  );
};
