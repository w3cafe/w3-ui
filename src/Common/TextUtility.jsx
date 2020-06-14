import { css } from 'styled-components';
import PropTypes from 'prop-types';

const TextUtility = css`
  ${({ t_c }) => t_c && `
    text-align: center;
  `}
  `;

export default TextUtility;