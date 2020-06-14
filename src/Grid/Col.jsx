import React from 'react';
import styled from 'styled-components';

import {Padding, Border, Margin} from '../Common';
import {BackgroundColor, FontColor} from '../Common/Color';
import DefaultThemeProps from "../Theme/DefaultThemeProps";

const SCREEN_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'];

const ColWrapper = styled.div`
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
              flex-basis: ${(100 / (props.theme.grid.size / props[size])) + '%'};
              width: ${(100 / (props.theme.grid.size / props[size])) + '%'};
            }`
      } else if (lastMatch) {
        acc += `
            @media(${breakPointSelect}-width: ${props.theme.grid.screenSizesInPx[size] + 'px'}) {
              flex: 0 1 auto;
              flex-basis: ${(100 / (props.theme.grid.size / props[lastMatch])) + '%'};
              width: ${(100 / (props.theme.grid.size / props[lastMatch])) + '%'};
            }`
      }
      return acc;
    }, '');
}
}
  `;

const ColItem = styled.div`
  ${Border}
  ${BackgroundColor}
  ${FontColor}
  ${Padding}
`;

const Col = (props) => {
  return (<ColWrapper {...props}>
    <ColItem {...props}>{props.children}</ColItem>
  </ColWrapper>);
};
Col.defaultProps = {
  theme: {
    ...DefaultThemeProps
  }
}

export default Col;