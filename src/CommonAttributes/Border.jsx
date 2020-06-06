import { css } from 'styled-components';
import PropTypes from 'prop-types';

//TODO: Finish b_t & left and right, all also,
const Border = css`
    ${({b_b, theme}) => b_b && `
      border-bottom: ${b_b}px solid;
    `}
    ${({borderColor, theme}) => borderColor && `
      border-color: ${theme.colors[borderColor] || borderColor};
    `}
  `;

export default Border;