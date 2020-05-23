import React from 'react';

import {CardContainer, Image} from './styles';
import {Text} from '../text';
import {INotice} from 'src/typescript/interfaces';

export const Card: React.FC<{notice: INotice}> = ({notice}) => (
  <CardContainer>
    <Image source={{uri: notice.picture}} />
    <Text.Title text={notice.title} />
    <Text.Paragraph text={notice.resume} />
  </CardContainer>
);
