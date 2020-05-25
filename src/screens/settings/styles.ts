import styled from 'styled-components/native';

export const Wrapper = styled.View`
  margin-top: 40px;
`;
export const Toogle = styled.Switch.attrs((props) => ({
  trackColor: {true: props.theme.activeIcon},
}))``;

export const CopyRight = styled.Text`
  background-color: lightgray;
  justify-content: center;
  width: 100%;
  border-width: 1px;
  border-color: grey;
  padding: 12px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  margin-right: 8px;
  margin-top: 8px;
`;
