import React from 'react';
import styled from 'styled-components';

import { Padding, Border } from '../CommonAttributes';
import { BGColor, FontColor  } from '../CommonAttributes/Common';
import DefaultThemeProps from "../Theme/DefaultThemeProps";

const SCREEN_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'];
const Col = styled.div`
  ${Border}
  ${BGColor}
  ${FontColor}
  ${Padding}
  flex: 1;
  ${
  (props) => {
    let lastMatch = null;
    return SCREEN_SIZES
      .reduce((acc, size) => {
        if (props[size]) {
          lastMatch = size;
          acc += `
            @media(max-width: ${props.theme.grid.screenSizesInPx[size] + 'px'}) {
              flex: 1 0 auto;
              max-width: ${(100 / (props.theme.grid.size / props[size])) + '%'};
            }`
        } else if (lastMatch) {
          acc += `
            @media(max-width: ${props.theme.grid.screenSizesInPx[size] + 'px'}) {
              flex: 1 0 auto;
              max-width: ${(100 / (props.theme.grid.size / props[lastMatch])) + '%'};
            }`
        }
        return acc;
      }, ''); 
  }
}
`;

Col.defaultProps = {
  theme: {
    ...DefaultThemeProps
  }
}

export default Col;