import React, {useState, useEffect} from 'react';

import {CardContainer, Image, TextWrapper} from './styles';
import {Text} from '../text';
import {INotice} from 'src/typescript/interfaces';
import {Loader} from '../loader';

type Card = {
  notice: INotice;
  onPress: (params: any) => void;
};

export const Card: React.FC<Card> = ({notice, onPress}) => {
  const [loadImage, setLoadImage] = useState(false);

  return (
    <CardContainer onPress={onPress}>
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
