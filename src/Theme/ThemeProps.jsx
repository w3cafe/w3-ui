import {css} from 'styled-components';
import DefaultThemeProps from '../Theme/DefaultThemeProps';

export const FontColor = css`
  color: ${props => props.theme.colors[props.color] || 'none'};
`;
export const BGColor = css`
  background-color: ${props => props.theme.colors[props.bgColor] || 'none'};
`;
//FIXME: MOved to CommonAttributes/Border
export const BorderColor = css`
   
`;

