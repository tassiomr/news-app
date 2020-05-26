import styled from 'styled-components/native';
import {normalize} from '../../../src/configs/helpers';

const size = {
  ExtraLarge: normalize(32),
  large: normalize(16),
  small: normalize(14),
};

export const TitleComponent = styled.Text`
  font-size: ${normalize(size.large)}px;
  color: ${(props) => props.theme.titleColor};
  font-family: SairaExtraCondensed-Medium;
  padding-right: ${normalize(8)}px;
  line-height: ${normalize(28)}px;
`;

export const ParagraphComponent = styled.Text`
  font-size: ${size.small}px;
  color: ${(props) => props.theme.paragraphColor};
  font-family: SairaExtraCondensed-Medium;
  line-height: ${normalize(20)}px;
`;

export const LinkComponent = styled.Text`
  font-size: ${size.small}px;
  color: ${(props) => props.theme.linkColor};
  text-decoration-line: underline;
  font-family: SairaExtraCondensed-Medium;
`;
