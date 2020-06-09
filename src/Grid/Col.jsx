import React from 'react';
import styled from 'styled-components';

import {Padding, Border, Margin} from '../CommonAttributes';
import {BGColor, FontColor} from '../CommonAttributes/Common';
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

const Col = styled.div`
  ${Border}
  ${BGColor}
  ${FontColor}
  ${Padding}
`;

Col.defaultProps = {
  theme: {
    ...DefaultThemeProps
  }
}

export default (props) => (<ColWrapper {...props}>
  <Col {...props}>{props.children}</Col>
</ColWrapper>);