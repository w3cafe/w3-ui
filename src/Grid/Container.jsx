import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import { Padding, TextUtility, BackgroundColor, FontColor, Border }
from '../Common';
import DefaultThemeProps from '../Theme/DefaultThemeProps';
const Container = styled.div`
  ${Padding}
  ${FontColor}
  ${TextUtility}
  ${BackgroundColor}
  ${Border}
  max-width: ${({theme}) => (theme.grid.screenSizesInPx.md)}px;
  font-size: ${({theme}) => (theme.baseFontSize)}px;;
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
  theme: DefaultThemeProps
}

export default Container;
