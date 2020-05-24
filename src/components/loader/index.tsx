import React from 'react';
import styled from 'styled-components/native';

export const Loader = styled.ActivityIndicator.attrs((props) => ({
  size: 'large',
}))`
  color: ${(props) => props.theme.titleColor};
`;
