import { css } from 'styled-components';
import PropTypes from 'prop-types';

import { getColor } from '../utils';

//TODO: Finish b_t & left and right, all also,
const Border = css`
    ${({b_b, theme}) => b_b && `
      border-bottom: ${b_b}px solid;
    `}
    ${({borderColor, theme}) => borderColor && `
      border-color: ${getColor({themeColors: theme.colors, color: borderColor})}
    `}
  `;

export default Border;