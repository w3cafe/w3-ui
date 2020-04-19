import React from 'react';
import styled from 'styled-components';
import { BorderColor, BGColor, FontColor  } from '../Theme/ThemeProps';
import Theme from '../Theme/Theme';

const Container = styled.div`
  ${BGColor}
  max-width: ${Theme.grid.screenSizesInPx.md}px;
  margin: 0 auto;
  ${({ fluid }) => fluid && `
    margin: 0;
    max-width: 100%;
  `}
  ${({ lg }) => lg && `
    max-width: ${Theme.grid.screenSizesInPx.lg}px;
  `}
`;
export default Container;
