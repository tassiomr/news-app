import React from 'react';
import {
  TitleComponent,
  HeaderTitleComponent,
  ParagraphComponent,
  LinkComponent,
} from './styles';

const Title: React.FC<{text: string}> = ({text}) => (
  <TitleComponent>{text}</TitleComponent>
);

const HeaderTitle: React.FC<{text: string}> = ({text}) => (
  <HeaderTitleComponent>{text}</HeaderTitleComponent>
);
const Paragraph: React.FC<{text: string}> = ({text}) => (
  <ParagraphComponent>{text}</ParagraphComponent>
);
const Link: React.FC<{text: string}> = ({text}) => (
  <LinkComponent>{text}</LinkComponent>
);

export const Text = {Title, HeaderTitle, Paragraph, Link};
