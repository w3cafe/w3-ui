import { css } from 'styled-components';
import PropTypes from 'prop-types';
import DefaultThemeProps from '../Theme/DefaultThemeProps';
import {getValue} from '../utils';

const Float = css`
  ${({ flt_l }) => flt_l && `
    float: left;
  `}
  ${({ flt_r }) => flt_r && `
    float: right;
  `}
`;
Float.defaultProps = {
  theme: {
    ...DefaultThemeProps
  }
}

Float.propTypes = {
  flt_l: PropTypes.bool,
  flt_r: PropTypes.bool,

};
export default Float;