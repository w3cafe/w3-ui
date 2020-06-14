import React, {createElement} from 'react';
import PropTypes from 'prop-types';

import styled, {css} from 'styled-components';
import { FontColor, TextUtility } from '../Common';

const SUPPORTED_TEXT_VARIANTS = ['p', 'span', 'h1', 'h2', 'h3', 'h4'];



const Text = ({children, variant, className}) => {
  let HtmlTag = 'span';
  if (SUPPORTED_TEXT_VARIANTS.indexOf(variant) > -1) {
    HtmlTag = variant;
  }
  return <HtmlTag className={className}>{children}</HtmlTag>
};

const StyledText = styled(Text)`
  ${FontColor}
  ${TextUtility}
`;

StyledText.propTypes = {
  variant: PropTypes.oneOf(SUPPORTED_TEXT_VARIANTS)
};

export default StyledgitText;