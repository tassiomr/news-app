import styled from 'styled-components/native';
import {normalize} from '../../../src/configs/helpers';
import {Platform} from 'react-native';

const size = {
  ExtraLarge: 32,
  large: 16,
  small: 14,
  link: 14,
};

export const TitleComponent = styled.Text`
  font-size: ${normalize(size.large)}px;
  color: ${(props) => props.theme.titleColor};
  font-family: SairaExtraCondensed-Medium;
  padding-left: 8px;
  padding-right: 8px;
  line-height: 28px;
  margin-top: 12px;
`;

export const ParagraphComponent = styled.Text`
  font-size: ${normalize(size.small)}px;
  color: ${(props) => props.theme.paragraphColor};
  font-family: SairaExtraCondensed-Medium;
  line-height: 20px;
  margin-top: 8px;
  padding-left: 8px;
  padding-right: 8px;
`;

export const LinkComponent = styled.Text`
  font-size: ${normalize(size.link)}px;
  color: ${(props) => props.theme.linkColor};
  text-decoration-line: underline;
  font-family: SairaExtraCondensed-Medium;
  padding-left: 8px;
  padding-right: 8px;
`;
