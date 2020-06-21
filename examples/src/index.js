import React from 'react';
import {render} from 'react-dom';
import { Container,Col, Row} from '../../Grid';
import {Button} from '../../Form';
import DefaultThemeProps from "../../src/Theme/DefaultThemeProps";
import {ThemeProvider} from 'styled-components';
import Header from './Header';
import './index.css';
const theme = {
  ...DefaultThemeProps,
  colors: {
    primary: ['#4da5e2', '#428fc4'],
    secondary: 'black'
  }
};

const App = () => (
  <ThemeProvider theme={theme}>
    <Header/>
    <Container lg>
      <Row spacing={2}>
        <Col bgColor="primary" md="6" sm="12" p={4}>Hello</Col>
        <Col bgColor="primary" md="6" sm="12" p={4}>
          <Button onClick={()=> {alert('Hello')}} background="primary">
            Hello
          </Button>
        </Col>
        <Col bgColor="primary" md="6" sm="12" p={4}>Hello</Col>
      </Row>
    </Container>
  </ThemeProvider>
);

render(<App/>, document.getElementById("root"));