import React from 'react';
import {TitleComponent, ParagraphComponent, LinkComponent} from './styles';

const Title: React.FC<{text: string}> = ({text}) => (
  <TitleComponent>{text}</TitleComponent>
);

const Paragraph: React.FC<{text: string}> = ({text}) => (
  <ParagraphComponent>{text}</ParagraphComponent>
);
const Link: React.FC<{text: string}> = ({text}) => (
  <LinkComponent>{text}</LinkComponent>
);

export const Text = {Title, Paragraph, Link};
