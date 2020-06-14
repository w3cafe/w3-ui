import {css} from 'styled-components';

import { getColor } from '../utils';

const Hover = css`
  &:hover {
     ${({ color, theme }) => color && `
      color: ${getColor({themeColors: theme.colors, color, index: 1})};
    `}
     ${({ background, theme }) => background   && `
      background: ${getColor({themeColors: theme.colors, color: background, index: 1})};
    `}
  }
`;

export default Hover;