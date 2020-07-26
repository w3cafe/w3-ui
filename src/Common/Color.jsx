import {css} from 'styled-components';

import { getColor } from '../utils';


export const FontColor = css`
    ${({color, theme}) => color && `
      color: ${getColor({themeColors: theme.colors, color})};
    `}
`;
export const BackgroundColor = css`
    ${({background, theme}) => background && `
      background: ${getColor({themeColors: theme.colors, background})};
    `}
`;

