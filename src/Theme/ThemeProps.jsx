import {css} from 'styled-components';

export const FontColor = css`
  color: ${props => props.theme.colors[props.color] || 'none'};
`;
export const BGColor = css`
  background-color: ${props => props.theme.colors[props.bgColor] || 'none'};
`;
export const BorderColor = css`
  border-color: ${props => props.theme.colors[props.borderColor] || 'none'};
`;

