import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import { Padding, Border, Margin, Hover, BackgroundColor, FontColor, TextUtility } from '../Common';
import DefaultThemeProps from "../Theme/DefaultThemeProps";


const ButtonCommon =  css`
    ${Padding}
    ${Border}
    ${Margin}
    ${TextUtility}
    ${FontColor}
    ${TextUtility}

    cursor: pointer;
`;
const LinkStyle = styled.a `
  ${ButtonCommon}
`;
const ButtonStyle = styled.button`
    ${ButtonCommon}
    ${Hover}
    border: none;
    ${BackgroundColor}

`;

const Button = (props) => {
  let Comp = ButtonStyle;
  let {pad_v, pad_h, size} = props;
  if (props.link)  {
    Comp = LinkStyle;
  }
  if (props.md) {
    pad_v = pad_v || 6;
    pad_h = pad_h || 18;
    size = size || 1.1;
  } else if (props.lg) {
    pad_v = pad_v || 7;
    pad_h = pad_h || 8;
    size = size || 1.2;
  } else {
    pad_v = 3;
    pad_h = 4;
    size = 1;
  }
  return (<Comp {...props} {...{pad_v, pad_h, size}}>{props.children}</Comp>);
}

Button.defaultProps = {
  background: 'primary',
  color: '#fff',
  theme: DefaultThemeProps,
};
Button.propTypes = {
  md: PropTypes.bool,
  lg: PropTypes.bool,
  background: PropTypes.string,
}
export default Button;

