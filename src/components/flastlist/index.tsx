import React from 'react';
import {INotice} from '../../typescript/interfaces';
import {FlatList} from 'react-native';
import {Card} from '../card';

export const NoticeFlatList: React.FC<{data: INotice}> = ({data}) => {
  return (
    <FlatList
      style={{padding: 16}}
      data={data}
      renderItem={({item}) => <Card notice={item} />}
    />
  );
};
