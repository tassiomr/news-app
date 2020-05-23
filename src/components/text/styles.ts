import styled from 'styled-components/native';
import {normalize} from '../../../src/configs/helpers';
import {Platform} from 'react-native';

const size = {
  ExtraLarge: 32,
  large: 24,
  small: 18,
  link: 14,
};

export const HeaderTitleComponent = styled.Text`
  font-size: ${normalize(size.ExtraLarge)}px;
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.titleColor};
  ${Platform.select({
    ios: {
      marginTop: 40,
    },
  })}
`;
export const TitleComponent = styled.Text`
  font-size: ${normalize(size.large)}px;
  color: ${(props) => props.theme.titleColor};
`;
export const ParagraphComponent = styled.Text`
  font-size: ${normalize(size.small)}px;
  color: ${(props) => props.theme.paragraphColor};
`;
export const LinkComponent = styled.Text`
  font-size: ${normalize(size.link)}px;
  color: ${(props) => props.theme.linkColor};
  text-decoration-line: underline;
`;
