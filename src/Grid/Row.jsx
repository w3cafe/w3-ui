import React from 'react';
import styled from 'styled-components';

import { Padding, Border } from '../Common';
import DefaultThemeProps from "../Theme/DefaultThemeProps";
import {getValue} from '../utils';

const Row = styled.div`
    ${Border}
    display: inline-flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    --gap: 0px;
    ${({spacing, theme}) => spacing && `
     --gap: ${getValue(spacing, theme.spaceUnit)}px;
     margin: calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));
     width: calc(100% + var(--gap));
     & > * {
         margin: var(--gap) 0 0 var(--gap);
     }
     
    `}
`;
Row.defaultProps = {
    theme: {
        ...DefaultThemeProps
    }
}
export default Row;