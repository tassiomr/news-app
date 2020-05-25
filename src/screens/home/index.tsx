import React, {useEffect, useState} from 'react';
import {Screen, Text, NoticeFlatList, Toogle, Modal} from '../../components';
import {useAppContext} from '../../context/app.context';
import {INotice} from '../../../src/typescript/interfaces';

export const Home: React.FC = () => {
  const {getNoticies, notices, changePage} = useAppContext();
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [selectedNotice, setNotice] = useState<INotice | null>(null);

  function openModal(notice: INotice) {
    setModalIsVisible(true);
    setNotice(notice);
  }

  useEffect(() => {
    getNoticies();
  });

  return (
    <>
      <Screen>
        <NoticeFlatList openModal={openModal} notices={notices.data} />
        <Toogle type={notices.type} changePage={changePage} />
      </Screen>
      {modalIsVisible && (
        <Modal
          notice={selectedNotice!}
          modalIsVisible={modalIsVisible}
          closeModal={() => setModalIsVisible(false)}
        />
      )}
    </>
  );
};
