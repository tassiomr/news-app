import React, {useEffect} from 'react';
import {Screen, Text, NoticeFlatList, Toogle, Modal} from '../../components';
import {useNotice} from '../../../src/context/noticies.context';

export const Home: React.FC = () => {
  const {getNoticies, notices, changePage} = useNotice();

  useEffect(() => {
    getNoticies();
  });

  return (
    <>
      <Screen>
        <NoticeFlatList data={notices.data} />
        <Toogle type={notices.type} changePage={changePage} />
      </Screen>
      {notices.data.length ? <Modal notice={notices.data[0]!} /> : null}
    </>
  );
};
