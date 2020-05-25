import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: rgba(0, 0, 0, 0.7);
  flex: 1;
  position: absolute;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const Wrapper = styled.View`
  background-color: ${(props) => props.theme.backgroundColor};
  width: 100%;
  height: 50%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 12px;
`;

export const Doodle = styled.View`
  height: 10px;
  width: 100px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.backgroundColor};
  margin-bottom: 10px;
`;

export const ShareButton = styled.TouchableOpacity`
  margin-top: 12px;
  justify-content: center;
  align-items: center;

  height: 50px;
  width: 50px;
`;
