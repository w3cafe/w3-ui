import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {BorderColor, BGColor, Padding, Margin} from '../CommonAttributes';
import DefaultThemeProps from "../Theme/DefaultThemeProps";

const Img = (props) => {
  return (<img {...props}/>)
};

const StyledImg = styled(Img)`
  ${BorderColor}
  ${BGColor}
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