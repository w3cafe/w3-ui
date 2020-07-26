import React from 'react';
import { css } from 'styled-components';
import PropTypes from 'prop-types';

import {getValue} from '../utils';
//change to mar
const Margin = css`
  ${({ p, mar_v, mar_h, mar_t, mar_r, mar_b, mar_l, theme }) => {
  let finalMargin = [0, 0, 0, 0];
  if (p) {
    finalMargin = [p,p,p,p];
  }

  if (mar_v) {
    finalMargin[0] = mar_v;
    finalMargin[2] = mar_v;
  }

  if (mar_h) {
    finalMargin[1] = mar_h;
    finalMargin[3] = mar_h;
  }
  if (mar_t) {
    finalMargin[0] = mar_t;
  }
  if (mar_r) {
    finalMargin[1] = mar_r;
  }
  if (mar_b) {
    finalMargin[2] = mar_b;
  }
  if (mar_l) {
    finalMargin[3] = mar_l;
  }
  return `
     margin: ${getValue(finalMargin[0], theme.spaceUnit)} ${getValue(finalMargin[1], theme.spaceUnit)} ${getValue(finalMargin[2], theme.spaceUnit)} ${getValue(finalMargin[3], theme.spaceUnit)};
   `;  
  }}
`;

Margin.defaultProps = {
  theme: {
    spaceUnit: 2
  }
}
Margin.propTypes = {
  mar: PropTypes.number,

  mar_v: PropTypes.number,
  mar_h: PropTypes.number,

  mar_t: PropTypes.number,
  mar_r: PropTypes.number,
  mar_b: PropTypes.number,
  mar_l: PropTypes.number
};
export default Margin;