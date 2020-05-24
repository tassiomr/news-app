import React from 'react';
import {INotice} from '../../typescript/interfaces';
import {FlatList} from 'react-native';
import {Card} from '../card';

export const NoticeFlatList: React.FC<{data: [INotice?]}> = ({data}) => {
  return (
    <FlatList
      keyExtractor={(item) => item?.id}
      style={{padding: 16, marginTop: 40}}
      data={data}
      renderItem={({item}) => <Card notice={item!} />}
    />
  );
};
