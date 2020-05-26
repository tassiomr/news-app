import React from 'react';
import {INotice} from '../../typescript/interfaces';
import {FlatList, Platform} from 'react-native';
import {Card} from '../card';
import {normalize} from '../../../src/configs/helpers';

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
        paddingTop: normalize(16),
        paddingBottom: normalize(80),
        ...Platform.select({
          android: {
            paddingLeft: normalize(4),
            paddingRight: normalize(4),
          },
        }),
      }}
      keyExtractor={(item) => item?.id!}
      style={{padding: normalize(16)}}
      data={notices}
      renderItem={({item}) => (
        <Card onPress={() => openModal(item!)} notice={item!} />
      )}
    />
  );
};
