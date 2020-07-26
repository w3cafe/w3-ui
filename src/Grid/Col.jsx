import React from 'react';
import styled from 'styled-components';

import {Padding, Border, Margin, TextUtility} from '../Common';
import {BackgroundColor, FontColor} from '../Common/Color';
import DefaultThemeProps from "../Theme/DefaultThemeProps";

const SCREEN_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'];

const Col = styled.div`
  ${Border}
  ${TextUtility}
  ${BackgroundColor}
  ${FontColor}
  ${Padding}
   flex: 1;
  ${(props) => {
  let lastMatch = null;
  return SCREEN_SIZES
    .reduce((acc, size) => {
      let breakPointSelect = 'min';
      if (props[size]) {
        lastMatch = size;
        acc += `
            @media(${breakPointSelect}-width: ${props.theme.grid.screenSizesInPx[size] + 'px'}) {
              flex: 0 1 auto;
              flex-basis: calc(${(100 / (props.theme.grid.size / props[size])) + '%'} - var(--gap));
              width: calc(${(100 / (props.theme.grid.size / props[size])) + '%'} - var(--gap));
            }`
      } else if (lastMatch) {
        acc += `
            flex: 0 1 auto;
            @media(${breakPointSelect}-width: ${props.theme.grid.screenSizesInPx[size] + 'px'}) {
              flex-basis: calc(${(100 / (props.theme.grid.size / props[lastMatch])) + '%'} - var(--gap));
              width: calc(${(100 / (props.theme.grid.size / props[lastMatch])) + '%'} - var(--gap));
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