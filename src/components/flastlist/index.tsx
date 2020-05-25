import React from 'react';
import {INotice} from '../../typescript/interfaces';
import {FlatList} from 'react-native';
import {Card} from '../card';

export const NoticeFlatList: React.FC<{data: [INotice?]}> = ({data}) => {
  return (
    <FlatList
      contentContainerStyle={{paddingTop: 16, paddingBottom: 80}}
      keyExtractor={(item) => item?.id!}
      style={{padding: 16}}
      data={data}
      renderItem={({item}) => <Card openModal={() => {}} notice={item!} />}
    />
  );
};
