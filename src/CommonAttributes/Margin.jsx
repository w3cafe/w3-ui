import { css } from 'styled-components';
import PropTypes from 'prop-types';
import DefaultThemeProps from '../Theme/DefaultThemeProps';
import {getValue} from '../utils';

const Margin = css`
  ${({ m, theme }) => m && `
    margin: ${getValue(m, theme.spaceUnit)};
  `}
  ${({ m_h, theme }) => m_h && `
    margin: 0 ${getValue(m_h, theme.spaceUnit)};
  `}
  ${({ m_v, theme }) => m_v && `
    margin: ${getValue(m_v, theme.spaceUnit)} 0;
  `}
  ${({ m_t, theme }) => m_t && `
    margin-top:${getValue(m_t, theme.spaceUnit)}
  `}
  ${({ m_l, theme }) => m_l && `
    margin-left: ${getValue(m_l, theme.spaceUnit)}
  `}
  ${({ m_r, theme }) => m_r && `
    margin-right: ${getValue(m_r, theme.spaceUnit)}
  `}
  ${({ m_b, theme }) => m_b && `
    margin-bottom: ${getValue(m_b, theme.spaceUnit)}
  `}
`;
Margin.defaultProps = {
  theme: {
    ...DefaultThemeProps
  }
}

Margin.propTypes = {

  m: PropTypes.number,

  m_v: PropTypes.number,
  m_h: PropTypes.number,

  m_t: PropTypes.number,
  m_r: PropTypes.number,
  m_b: PropTypes.number,
  m_l: PropTypes.number

};
export default Margin;