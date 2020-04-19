import React from 'react';
import {render} from 'react-dom';
import Row from '../../src/Grid/Row';
import Col from '../../src/Grid/Col';
import Container from '../../src/Grid/Container';
import {ThemeProvider} from 'styled-components';
const theme = {
  colors: {
    primary: 'palevioletred',
    secondary: 'black'
  }
};

const App = () => (
  <ThemeProvider theme={theme}>
    <Container lg>
      <Row>
        <Col bgColor="primary" md="6" sm="12">Hello</Col>
        <Col bgColor="primary" md="6" sm="12">Hello</Col>
        <Col bgColor="primary" md="6" sm="12">Hello</Col>
      </Row>
    </Container>
  </ThemeProvider>
);

render(<App/>, document.getElementById("root"));