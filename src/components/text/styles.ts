import styled from 'styled-components/native';
import {normalize} from '../../../src/configs/helpers';
import {Platform} from 'react-native';

const size = {
  ExtraLarge: 48,
  large: 22,
  small: 18,
  link: 14,
};

export const HeaderTitleComponent = styled.Text`
  font-family: SairaExtraCondensed-Medium;
  font-size: ${normalize(size.ExtraLarge)}px;
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.titleColor};
  background-color: ${(props) => props.theme.backgroundColor};
  ${Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: '0px 5px',
      shadowOpacity: '0.1',
      shadowRadius: '2px',
    },
  })};
`;
export const TitleComponent = styled.Text`
  font-size: ${normalize(size.large)}px;
  color: ${(props) => props.theme.titleColor};
  font-family: SairaExtraCondensed-Medium;
  padding-left: 8px;
  padding-right: 8px;
  line-height: 32px;
  margin-top: 16px;
`;
export const ParagraphComponent = styled.Text`
  font-size: ${normalize(size.small)}px;
  color: ${(props) => props.theme.paragraphColor};
  font-family: SairaExtraCondensed-Medium;
  line-height: 28px;
  margin-top: 8px;
  padding-left: 8px;
  padding-right: 8px;
`;
export const LinkComponent = styled.Text`
  font-size: ${normalize(size.link)}px;
  color: ${(props) => props.theme.linkColor};
  text-decoration-line: underline;
  font-family: SairaExtraCondensed-Medium;
`;
