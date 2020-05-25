import React from 'react';
import {ButtonWrapper, Button, ButtonText} from './styles';
import {NoticeType} from '../../../src/typescript/enums';

type Toogle = {
  changePage: Function;
  type: NoticeType;
};

export const Toogle: React.FC<Toogle> = ({changePage, type}) => {
  const isTechSelected = type === NoticeType.technology;
  const isScienceSelected = type === NoticeType.science;

  return (
    <ButtonWrapper>
      <Button
        onPress={() => changePage(NoticeType.technology)}
        selected={isTechSelected}
        disabled={isTechSelected}
        left>
        <ButtonText selected={isTechSelected}>
          {NoticeType.technology}
        </ButtonText>
      </Button>
      <Button
        onPress={() => changePage(NoticeType.science)}
        disabled={isScienceSelected}
        selected={isScienceSelected}>
        <ButtonText selected={isScienceSelected}>
          {NoticeType.science}
        </ButtonText>
      </Button>
    </ButtonWrapper>
  );
};
