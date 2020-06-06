import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import { Padding, TextUtility } from '../CommonAttributes';

import {BorderColor, BGColor, FontColor} from '../CommonAttributes/Common';
import DefaultThemeProps from '../Theme/DefaultThemeProps';

const Container = styled.div`
  ${Padding}
  ${TextUtility}
  ${BGColor}
  ${BorderColor}
  max-width: ${({theme}) => (theme.grid.screenSizesInPx.md)}px;
  margin: 0 auto;
  ${({fluid}) => fluid && `
    margin: 0;
    max-width: 100%;
  `}
  ${({lg}) => lg && css`
    max-width: ${({theme}) => (theme.grid.screenSizesInPx.lg)}px;
  `}
  ${({xl}) => xl && css`
    max-width: ${({theme}) => (theme.grid.screenSizesInPx.xl)}px;
  `}
`;
Container.propTypes = {
  fluid: PropTypes.boolean,
  lg: PropTypes.boolean,
}

Container.defaultProps = {
  theme: {
    spaceUnit: DefaultThemeProps.spaceUnit,
    grid: DefaultThemeProps.grid,
    colors: DefaultThemeProps.colors
  }
}

export default Container;
