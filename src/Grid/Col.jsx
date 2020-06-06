import React from 'react';
import styled from 'styled-components';

import { Padding, Border } from '../CommonAttributes';
import {  BGColor, FontColor  } from '../Theme/ThemeProps';
import DefaultThemeProps from "../Theme/DefaultThemeProps";

const Col = styled.div`
  ${Border}
  ${BGColor}
  ${FontColor}
  ${Padding}
  flex: 1;
  ${
  (props) =>
    Object.keys(props.theme.grid.screenSizesInPx)
      .reduce((acc, size) => {
        if (props[size]) {
          acc += `
            @media(max-width: ${props.theme.grid.screenSizesInPx[size] + 'px'}) {
              flex-basis: ${(100 / (props.theme.grid.size / props[size])) + '%'};
            }`
        }
        return acc;
      }, '')
}
`;

Col.defaultProps = {
  theme: {
    ...DefaultThemeProps
  }
}

export default Col;