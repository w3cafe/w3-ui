import { css } from 'styled-components';
import PropTypes from 'prop-types';
import DefaultThemeProps from "../Theme/DefaultThemeProps";

const FONT_SIZES = {
  'hero-heading': 2.5,
  'heading': 1.5,
  'sub-heading': 1.2,
  'small': 0.8,
  'xs': 0.5
};
const TextUtility = css`
  ${({ size }) => size && FONT_SIZES[size] && `
    font-size: ${FONT_SIZES[size]}em;
  `}
  ${({ size }) => size && !FONT_SIZES[size] && `
    font-size: ${size}em;
  `}
  
  ${({ t_c }) => t_c && `
    text-align: center;
  `}
`;


TextUtility.defaultProps = {
  theme: {
    ...DefaultThemeProps
  }
}
export default TextUtility;