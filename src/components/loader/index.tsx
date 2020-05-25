import React from 'react';
import styled from 'styled-components/native';

const ActivityIndicator = styled.ActivityIndicator.attrs((props) => ({
  size: 'large',
}))`
  color: ${(props) => props.theme.titleColor};
`;

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Loader: React.FC = () => (
  <Wrapper>
    <ActivityIndicator />
  </Wrapper>
);
