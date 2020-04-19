import PropTypes from 'prop-types';
import styled from 'styled-components';
import {BorderColor, BGColor, FontColor} from '../Theme/ThemeProps';
import DefaultThemeProps from '../Theme/DefaultThemeProps';

const Container = styled.div`
  ${BGColor}
  max-width: ${({theme}) => (theme.grid.screenSizesInPx.md)}px;
  margin: 0 auto;
  ${({fluid}) => fluid && `
    margin: 0;
    max-width: 100%;
  `}
  ${({lg}) => lg && `
    max-width: ${({theme}) => (theme.grid.screenSizesInPx.lg)}px;
  `}
`;
Container.propTypes = {
  fluid: PropTypes.boolean,
  lg: PropTypes.boolean,
}

Container.defaultProps = {
  theme: {
    grid: DefaultThemeProps.grid,
    colors: DefaultThemeProps.colors
  }
}

export default Container;
