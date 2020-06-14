import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {Border, BackgroundColor, Padding, Margin} from '../Common';
import DefaultThemeProps from "../Theme/DefaultThemeProps";

const Img = (props) => {
  return (<img {...props}/>)
};

const StyledImg = styled(Img)`
  ${Border}
  ${BackgroundColor}
  ${Padding}
  ${Margin}
  ${({round}) => round && css`
    border-radius: 50%
  `}
  ${({thumbnail}) => thumbnail && css`
    padding: .25rem;
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: .25rem;
    max-width: 100%;
    height: auto;
  ` }
`;

StyledImg.defaultProps = {
  theme: {
    ...DefaultThemeProps
  }
};

StyledImg.propTypes = {
  thumbnail: PropTypes.bool,
  round: PropTypes.bool,
}

export default StyledImg;