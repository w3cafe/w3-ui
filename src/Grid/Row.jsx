import React from 'react';
import styled from 'styled-components';

import { Padding, Border } from '../CommonAttributes';
import DefaultThemeProps from "../Theme/DefaultThemeProps";

const Row = styled.div`
    ${Border}
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
`;
Row.defaultProps = {
    theme: {
        ...DefaultThemeProps
    }
}
export default Row;