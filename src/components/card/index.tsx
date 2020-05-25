import React, {useState, useEffect} from 'react';

import {CardContainer, Image, TextWrapper} from './styles';
import {Text} from '../text';
import {INotice} from 'src/typescript/interfaces';
import {Loader} from '../loader';
import {Modal} from 'react-native';

type Card = {
  notice: INotice;
  openModal: (params: any) => void;
};

export const Card: React.FC<Card> = ({notice, openModal}) => {
  const [loadImage, setLoadImage] = useState(false);

  return (
    <CardContainer>
      <Image
        source={{uri: notice.picture, cache: 'force-cache'}}
        onLoadStart={() => {
          setLoadImage(true);
        }}
        onLoadEnd={() => {
          setLoadImage(false);
        }}>
        {loadImage && <Loader />}
      </Image>
      <TextWrapper>
        <Text.Paragraph text={notice.title} />
      </TextWrapper>
    </CardContainer>
  );
};
