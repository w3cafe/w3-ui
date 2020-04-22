import {css} from 'styled-components';
import DefaultThemeProps from '../Theme/DefaultThemeProps';

export const FontColor = css`
  color: ${props => props.theme.colors[props.color] || 'none'};
`;
export const BGColor = css`
  background-color: ${props => props.theme.colors[props.bgColor] || 'none'};
`;
export const BorderColor = css`
   ${({borderColor, theme}) => borderColor && `
    border: 1px solid;
    border-color: ${theme.colors[borderColor] || borderColor};
  `}
`;

