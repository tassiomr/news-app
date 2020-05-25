import React from 'react';
import {INotice} from '../../typescript/interfaces';
import {FlatList, Platform} from 'react-native';
import {Card} from '../card';

type NoticeFlatList = {
  openModal: (notice: INotice) => void;
  notices: [INotice?];
};

export const NoticeFlatList: React.FC<NoticeFlatList> = ({
  notices,
  openModal,
}) => {
  return (
    <FlatList
      contentContainerStyle={{
        paddingTop: 16,
        paddingBottom: 80,
        ...Platform.select({
          android: {
            paddingLeft: 4,
            paddingRight: 4,
          },
        }),
      }}
      keyExtractor={(item) => item?.id!}
      style={{padding: 16}}
      data={notices}
      renderItem={({item}) => (
        <Card onPress={() => openModal(item!)} notice={item!} />
      )}
    />
  );
};
