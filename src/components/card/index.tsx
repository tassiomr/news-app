import React, {useState, useEffect} from 'react';

import {CardContainer, Image} from './styles';
import {Text} from '../text';
import {INotice} from 'src/typescript/interfaces';
import {Loader} from '../loader';

export const Card: React.FC<{notice: INotice}> = ({notice}) => {
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
      <Text.Title text={notice.title} />
      <Text.Paragraph text={notice.resume} />
    </CardContainer>
  );
};
