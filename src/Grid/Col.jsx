import React from 'react';
import styled from 'styled-components';
/**
 * Inspired by https://www.toptal.com/sass/css3-flexbox-sass-grid-tutorial
 */
import { BorderColor, BGColor, FontColor  } from '../Theme/ThemeProps';
import Theme from '../Theme/Theme';


const Col = styled.div`
  ${BorderColor}
  ${BGColor}
  ${FontColor}
  flex: 1;
  ${
  (props) =>
    Object.keys(Theme.grid.screenSizesInPx)
      .reduce((acc, size) => {
        if (props[size]) {
          acc += `
            @media(max-width: ${Theme.grid.screenSizesInPx[size] + 'px'}) {
              flex-basis: ${(100 / (Theme.grid.size / props[size])) + '%'};
            }`
        }
        return acc;
      }, '')
}
`;

export default Col;