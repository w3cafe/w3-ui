import React from 'react';
import {render} from 'react-dom';
import { Container,Col, Row} from '../../Grid';
import DefaultThemeProps from "../../src/Theme/DefaultThemeProps";
import {ThemeProvider} from 'styled-components';
const theme = {
  ...DefaultThemeProps,
  colors: {
    primary: 'palevioletred',
    secondary: 'black'
  }
};

const App = () => (
  <ThemeProvider theme={theme}>
    <Container lg>
      <Row spacing={2}>
        <Col bgColor="primary" md="6" sm="12" p={4}>Hello</Col>
        <Col bgColor="primary" md="6" sm="12" p={4}>Hello</Col>
        <Col bgColor="primary" md="6" sm="12" p={4}>Hello</Col>
      </Row>
    </Container>
  </ThemeProvider>
);

render(<App/>, document.getElementById("root"));