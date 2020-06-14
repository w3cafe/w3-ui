import React from 'react';
import { css } from 'styled-components';
import PropTypes from 'prop-types';

import {getValue} from '../utils';
//change to pad
const Padding = css`
  ${({ p, pad_v, pad_h, pad_t, pad_r, pad_b, pad_l, theme }) => {
    console.log('in padding', theme);
  let finalPadding = [0, 0, 0, 0];
  if (p) {
    finalPadding = [p,p,p,p];
  }

  if (pad_v) {
    finalPadding[0] = pad_v;
    finalPadding[2] = pad_v;
  }

  if (pad_h) {
    finalPadding[1] = pad_h;
    finalPadding[3] = pad_h;
  }
  if (pad_t) {
    finalPadding[0] = pad_t;
  }
  if (pad_r) {
    finalPadding[1] = pad_r;
  }
  if (pad_b) {
    finalPadding[2] = pad_b;
  }
  if (pad_l) {
    finalPadding[3] = pad_l;
  }
  return `
     padding: ${getValue(finalPadding[0], theme.spaceUnit)} ${getValue(finalPadding[1], theme.spaceUnit)} ${getValue(finalPadding[2], theme.spaceUnit)} ${getValue(finalPadding[3], theme.spaceUnit)};
   `;  
  }}
`;

Padding.defaultProps = {
  theme: {
    spaceUnit: 2
  }
}
Padding.propTypes = {
  pad: PropTypes.number,

  pad_v: PropTypes.number,
  pad_h: PropTypes.number,

  pad_t: PropTypes.number,
  pad_r: PropTypes.number,
  pad_b: PropTypes.number,
  pad_l: PropTypes.number
};
export default Padding;