import React from 'react';
import styled from 'styled-components';
/**
 * Inspired by https://www.toptal.com/sass/css3-flexbox-sass-grid-tutorial
 */
import { BorderColor, BGColor, FontColor  } from '../Theme/ThemeProps';

const Col = styled.div`
  ${BorderColor}
  ${BGColor}
  ${FontColor}
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

export default Col;