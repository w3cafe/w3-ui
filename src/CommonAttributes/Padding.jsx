import { css } from 'styled-components';
import PropTypes from 'prop-types';

//change to pad
const Padding = css`
  ${({ p, theme }) => p && `
    padding: ${theme.spaceUnit * (p*1)}px;
  `}
  ${({ p_h, theme }) => p_h && `
    padding: 0 ${theme.spaceUnit * p_h*1}px;
  `}
  ${({ p_v, theme }) => p_v && `
    padding: ${theme.spaceUnit * p_v*1}px 0;
  `}
  ${({ p_t, theme }) => p_t && `
    padding-top: ${theme.spaceUnit * p_t*1}px;
  `}
  ${({ p_l, theme }) => p_l && `
    padding-left: ${theme.spaceUnit * p_l*1}px;
  `}
  ${({ p_r, theme }) => p_r && `
    padding-right: ${theme.spaceUnit * p_r*1}px;
  `}
  ${({ p_b, theme }) => p_b && `
    padding-bottom: ${theme.spaceUnit * p_b*1}px;
  `}
`;
Padding.defaultProps = {
  theme: {
    spaceUnit: 2
  }
}
Padding.propTypes = {
  p: PropTypes.number,

  p_v: PropTypes.number,
  p_h: PropTypes.number,

  p_t: PropTypes.number,
  p_r: PropTypes.number,
  p_b: PropTypes.number,
  p_l: PropTypes.number

};
export default Padding;