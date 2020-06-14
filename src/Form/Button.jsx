import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import { Padding, Border, Margin, TextUtility, Hover, BackgroundColor, FontColor, Text } from '../Common';


const ButtonCommon =  css`
    ${Padding}
    ${Border}
    ${Margin}
    ${TextUtility}
    ${BackgroundColor}
    ${FontColor}
    ${Text}
    cursor: pointer;
`;
const LinkStyle = styled.a `
  ${ButtonCommon}
`;
const ButtonStyle = styled.button`
    ${ButtonCommon}
    ${Hover}
   
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
};
Button.propTypes = {
  md: PropTypes.bool
}
export default Button;

